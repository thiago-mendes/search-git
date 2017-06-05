var React = require('react');
var createReactClass = require('create-react-class');
var GitHubUser = require('../services/GitHubUser');
var PropTypes = require('prop-types');

var SearchUser = createReactClass({
	handleSubmit: function(e) {
		e.preventDefault();
		GitHubUser.getByUserName(this.refs.username.value).then(function(response){
			this.props.updateUser(response.data);
		}.bind(this));

		GitHubUser.getReposByUserName(this.refs.username.value).then(function(response){
			this.props.updateRepos(response.data);
		}.bind(this));
	},
	render: function(){
	return(
		<div className="jumbotron">
		        <h1>GitHub Info</h1>
		        <div className="row">
		          <form onSubmit={this.handleSubmit}>
		            <div className="form-group">
		              <label>Username</label>
		              <input
		                type="text"
		                ref="username"
		                className="form-control"
		                placeholder="Ex: matheusml"
		                />
		            </div>
		            <button
		              type="submit"
		              className="btn btn-primary">Buscar
		            </button>
		          </form>
		        </div>
	      	</div>
	);
	}
});

SearchUser.propTypes = {
	updateUser: PropTypes.func.isRequired,
	updateRepos: PropTypes.func.isRequired,
}

module.exports = SearchUser;