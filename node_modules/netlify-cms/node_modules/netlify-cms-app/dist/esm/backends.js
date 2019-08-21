"use strict";

var _netlifyCmsCore = require("netlify-cms-core");

var _netlifyCmsBackendGithub = require("netlify-cms-backend-github");

var _netlifyCmsBackendGitlab = require("netlify-cms-backend-gitlab");

var _netlifyCmsBackendGitGateway = require("netlify-cms-backend-git-gateway");

var _netlifyCmsBackendBitbucket = require("netlify-cms-backend-bitbucket");

var _netlifyCmsBackendTest = require("netlify-cms-backend-test");

_netlifyCmsCore.NetlifyCmsCore.registerBackend('git-gateway', _netlifyCmsBackendGitGateway.GitGatewayBackend);

_netlifyCmsCore.NetlifyCmsCore.registerBackend('github', _netlifyCmsBackendGithub.GitHubBackend);

_netlifyCmsCore.NetlifyCmsCore.registerBackend('gitlab', _netlifyCmsBackendGitlab.GitLabBackend);

_netlifyCmsCore.NetlifyCmsCore.registerBackend('bitbucket', _netlifyCmsBackendBitbucket.BitbucketBackend);

_netlifyCmsCore.NetlifyCmsCore.registerBackend('test-repo', _netlifyCmsBackendTest.TestBackend);