const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn(
	'/signin'
);

const authenticate = require('../config/authMiddleware');

const db = require('../models/projectModel');

// setup-aws-s3.js config for aws-sdk and multer
const upload = require('../setup-aws-s3');

const singleUpload = upload.single('image')

// Amazon AWS Upload endpoint
router.post('/image-upload', function (req, res) {
	singleUpload(req, res, function (err, some) {
		if (err) {
			return res.status(422).send({ errors: [{ title: 'Image Upload Error', detail: err.message }] });
		}
		return res.json({ 'imageUrl': req.file.location });
	});
})

// get project by id
router.get('/:project_id', function (req, res, next) {
	const { project_id } = req.params;

	db.getProjectByID(project_id)
		.then(project => {
			if (project) {
				res.status(200).json(project);
			} else {
				res.status(404).json({ error: 'Project not found.' });
			}
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// get reviews by project id
router.get('/:project_id/reviews', function (req, res, next) {
	const { project_id } = req.params;

	db.getReviewsByProjectID(project_id)
		.then(reviews => {
			if (reviews) {
				res.status(200).json(reviews);
			} else {
				res.status(404).json({ error: 'Project not found.' });
			}
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// add project
router.post('/', ensureLoggedIn, authenticate, function (req, res, next) {
	const { user_id, project_name, img_url, text } = req.body;

	if (!project_name || !img_url || !text) {
		return res.status(422).json({ error: 'Missing parameters.' });
	} else {
		const project = { user_id, project_name, img_url, text };
		db.addProject(project)
			.then(project_id => {
				res.status(201).json(project_id);
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}
});

// update project by id
router.put('/:project_id', ensureLoggedIn, function (req, res, next) {
	const { user_id, project_name, img_url, text } = req.body;
	const { project_id } = req.params;

	if (!project_name || !img_url || !text) {
		return res.status(422).json({ error: 'Missing parameters.' });
	} else {
		const changes = { project_name, img_url, text };
		db.editProject(user_id, project_id, changes)
			.then(count => {
				if (count) {
					res.status(200).json(count);
				} else {
					res.status(404).json({ error: 'Project not found.' });
				}
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}
});

// delete project by id
router.delete('/:project_id', ensureLoggedIn, function (req, res, next) {
	const { user_id } = req.body;
	const { project_id } = req.params;

	db.removeProject(user_id, project_id)
		.then(count => {
			if (count) {
				res.status(200).json(count);
			} else {
				res.status(404).json({ error: 'Project not found.' });
			}
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;
