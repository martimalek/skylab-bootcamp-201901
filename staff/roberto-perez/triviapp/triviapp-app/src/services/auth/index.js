import userApi from '../../api/user-api';
import validate from '../../utils/validate';
import Xtorage from '../xtorage';

const auth = {
	__userApiToken__: null,
	__user__: null,
	storage: sessionStorage,

	async signup(data) {
		const { name, surname, email, password } = data;

		validate([
			{ key: 'name', value: name, type: String },
			{ key: 'surname', value: surname, type: String },
			{ key: 'email', value: email, type: String },
			{ key: 'password', value: password, type: String },
		]);

		try {
			return await userApi.signup(data);
		} catch (error) {
			throw Error(error.message);
		}
	},

	async login(data) {
		const { email, password } = data;

		if (!email || !password) throw new Error('Incorrect email or password');

		validate([
			{ key: 'email', value: email, type: String },
			{ key: 'password', value: password, type: String },
		]);

		try {
			const { token, user } = await userApi.login(data);

			// const xtorage = new Xtorage(this.storage);

			// xtorage.set('token', token);
			// xtorage.set('user', user);
			this.__userApiToken__ = token;
			this.__user__ = JSON.stringify(user);
		} catch (error) {
			throw Error(error.message);
		}
	},

	async retrieveUser() {
		return userApi.retrieveUser(this.__userApiToken__);
	},

	async updateUser(data) {
		const { name, surname, email, image, password, confirmPassword } = data;

		validate([
			{ key: 'name', value: name, type: String },
			{ key: 'surname', value: surname, type: String },
			{ key: 'email', value: email, type: String },
			{ key: 'Image', value: image, type: String, optional: true },
		]);

		if (password) {
			validate([
				{ key: 'password', value: password, type: String },
				{ key: 'Confirm password', value: confirmPassword, type: String },
			]);

			if (password !== confirmPassword) throw Error('Passwords do not match');
		}

		const user = await userApi.updateUser(this.__userApiToken__, data);

		// const xtorage = new Xtorage(this.storage);

		// xtorage.set('user', user);

		this.__user__ = JSON.stringify(user);

		return user;
	},

	/**
	 * Checks user is logged in.
	 */
	get isUserLoggedIn() {
		// const xtorage = new Xtorage(this.storage);
		// return !!xtorage.get('token');
		return !!this.__userApiToken__;
	},

	/**
	 * Return user token.
	 */
	get token() {
		// const xtorage = new Xtorage(this.storage);
		// return xtorage.get('token');
		return this.__userApiToken__;
	},

	/**
	 * Return user logged in.
	 */
	get userLoggedIn() {
		// const xtorage = new Xtorage(this.storage);
		// return xtorage.get('user');
		return this.__user__;
	},

	/**
	 * Logs out the user.
	 */
	logOutUser() {
		// const xtorage = new Xtorage(this.storage);
		// xtorage.clear();
		this.__userApiToken__ = null;
		this.__user__ = null;
	},
};

export default auth;
