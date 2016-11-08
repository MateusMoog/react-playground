import React from 'react'
import GitHubUser from '../services/GitHubUser'

const SearchUser = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        GitHubUser.getByUsername(this.refs.username.value)
            .then(function(response) {
                this.props.updateUser(response.data)
            }.bind(this));
        GitHubUser.getReposByUsername(this.refs.username.value)
            .then(function(response) {
                this.props.updateRepos(response.data)
            }.bind(this));
    },
    render: function() {
        return (
            <div className="jumbotrom">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                ref="username"
                                className="form-control"
                                placeholder="Ex: mateusmoog"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
})

SearchUser.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired
}

module.exports = SearchUser;