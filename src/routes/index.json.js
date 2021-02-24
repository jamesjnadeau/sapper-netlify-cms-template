import glob from 'glob';
import {fs} from 'mz';
import path from 'path';
const pug = require('pug');
const yaml = require('js-yaml')

// import loadPost from './_load_page';
async function loadPost(file) {
	const content = (await fs.readFile(file)).toString();
	const meta = yaml.safeLoad(content);
	let data = {
		title: meta.title,
		html:  pug.render(meta.body, {
			pretty: false,
			filename: path.resolve(file),
		})
	};
	return data;
}

export async function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	// List the Markdown files and return their filenames
  const posts = await new Promise((resolve, reject) =>
      glob(`static/_content/index.yml`, (err, files) => {
      if (err) return reject(err);
      return resolve(files);
    }),
	);

	if (posts.length) {
		const post = posts[0];
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(await loadPost(post), null, 2));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
