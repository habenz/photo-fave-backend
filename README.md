## Steps I Followed:
	- made trello board to document requirements and possible object models [trello](https://trello.com/b/NIe6eTfM/photo-app-mod-2-final-project)
	- followed tutorial for full stack app: [youtube](https://www.youtube.com/watch?v=7CqJlxBYj-M)
	- also referenced [JS Mastery Video](https://www.youtube.com/watch?v=aibtHnbeuio) for project folder setup
	- changed package.json to have type: module and changed start script

	- Set Up Mongodb on Atlas
	- created User model and photo model
		- Note to self: there's a difference between sub-documents, nested paths, and  references to documents
			- https://mongoosejs.com/docs/subdocs.html
			- https://vegibit.com/mongoose-relationships-tutorial/#:~:text=Mongoose%20Relationships%20Tutorial%20Summary,does%20with%20a%20relational%20database.
		- Note to self: Validation for required properties has to be updated: https://mongoosejs.com/docs/validation.html#required-validators-on-nested-objects
		- useful reference for models/mongoose https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
	- set up routes and separate controllers for routes
		- began with basic getters for single and all users
		- then posts to create new user and create new photo

	- Began Front-end Dev

###### Fun Discoveries!
	- ls -Inode_modules -R 
		- -Istring ignores things that match string, -R does recursive listing
