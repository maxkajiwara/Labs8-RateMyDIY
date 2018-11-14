const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn(
	'/signin'
);

const db = require('../models/projectModel');

router.get('/api/projects/:project_id', function(req, res, next) {
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

router.get('/api/projects/:project_id/reviews', function(req, res, next) {
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

router.post('/api/projects', ensureLoggedIn, function(req, res, next) {
	const { user_id, project_name, picture, text } = req.body;

	if (!project_name || !picture || !text) {
		return res.status(422).json({ error: 'Missing parameters.' });
	} else {
		const project = { user_id, project_name, picture, text };
		db.addProject(project)
			.then(project_id => {
				res.status(201).json(project_id);
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}
});

router.put('/api/projects/:project_id', ensureLoggedIn, function(
	req,
	res,
	next
) {
	const { user_id, project_name, picture, text } = req.body;
	const { project_id } = req.params;

	if (!project_name || !picture || !text) {
		return res.status(422).json({ error: 'Missing parameters.' });
	} else {
		const changes = { project_name, picture, text };
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

router.delete('/api/projects/:project_id', ensureLoggedIn, function(
	req,
	res,
	next
) {
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
