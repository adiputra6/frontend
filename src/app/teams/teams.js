'use strict';

angular.module('teams')
  .config(function($routeProvider, defaultRouteOptions, personResolver) {
    $routeProvider.when('/teams/:id/account', angular.extend({
      templateUrl: 'app/teams/account.html',
      controller: 'BaseTeamController',
      resolve: { person: personResolver },
      trackEvent: 'View Team Account'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/activity', angular.extend({
      templateUrl: 'app/teams/activity.html',
      controller: 'BaseTeamController',
      trackEvent: 'View Team Activity'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/bounties', angular.extend({
      templateUrl: 'app/teams/bounties.html',
      controller: 'BaseTeamController',
      trackEvent: 'View Team Bounties'
    }, defaultRouteOptions));

    $routeProvider.when('/teams', angular.extend({
      templateUrl: 'app/teams/index.html',
      controller: 'TeamsIndexController',
      trackEvent: 'View Teams'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/join', angular.extend({
      templateUrl: 'app/teams/join.html',
      controller: 'BaseTeamController',
      resolve: { person: personResolver },
      trackEvent: 'View Team Join'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/members/manage', angular.extend({
      templateUrl: 'app/teams/manage_members.html',
      controller: 'BaseTeamController',
      resolve: { person: personResolver },
      trackEvent: 'View Team Members Manage'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/members', angular.extend({
      templateUrl: 'app/teams/members.html',
      controller: 'BaseTeamController',
      trackEvent: 'View Team Members'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/new', angular.extend({
      templateUrl: 'app/teams/new.html',
      controller: 'NewTeamController',
      resolve: { person: personResolver },
      trackEvent: 'View Team Create'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/projects', angular.extend({
      templateUrl: 'app/teams/projects.html',
      controller: 'BaseTeamController',
      trackEvent: 'View Team Projects'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/settings', angular.extend({
      templateUrl: 'app/teams/settings.html',
      controller: 'BaseTeamController',
      resolve: { person: personResolver },
      trackEvent: 'View Team Settings'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id', angular.extend({
      templateUrl: 'app/teams/fundraiser.html',
      controller: 'BaseTeamController',
      trackEvent: 'View Team'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/fundraiser', angular.extend({
      templateUrl: 'app/teams/fundraiser.html',
      controller: 'BaseTeamController',
      trackEvent: 'View Team Fundraiser'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/backers', angular.extend({
      templateUrl: 'app/teams/backers.html',
      controller: 'BaseTeamController',
      trackEvent: 'View Team Backers'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/suggested_issues', angular.extend({
      templateUrl: 'app/teams/suggested_issues.html',
      controller: 'BaseTeamController',
      trackEvent: 'View Team Suggested Issues'
    }, defaultRouteOptions));

    $routeProvider.when('/teams/:id/issues', angular.extend({
      templateUrl: 'app/teams/issues.html',
      controller: 'BaseTeamController',
      trackEvent: 'View Team Issues'
    }, defaultRouteOptions));
  });