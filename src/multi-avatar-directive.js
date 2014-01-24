;'use strict';

angular.module('ui-multi-avatar', [])
  .directive('multiAvatar', ['md5', function (md5) {
    return {
      restrict: 'E',
      link:function(scope, element, attrs) {

		  var services = [
			  {id: 'facebook', tpl: '<img src="http://graph.facebook.com/{id}/picture?width=200&height=200" class="img-responsive"/>'} ,
			  {id: 'twitter',  tpl: '<img src="https://pbs.twimg.com/profile_images/{id}_bigger.jpeg" class="img-responsive"/>'} ,
			  {id: 'github',   tpl: '<img src="https://identicons.github.com/{id}.png" style="width:200px; height:200px" class="img-responsive"/>'} ,
			  {id: 'gravatar', tpl: '<img src="https://secure.gravatar.com/avatar/{id}?s=200&d=mm" style="width:200px; height:200px" class="img-responsive"/>'} ,
		  ]
		  for (var s=0; s<services.length; s++) {
			var service = services[s],
				attr    = service.id + 'Id',
				id      = attrs[attr]
				isGravatar = attr == 'gravatarId';
			if (isGravatar || (id && id.length > 0)) {
				if (!id) { id = ''}
				if (isGravatar && id.split('@').length>1) {
				  id = md5.createHash(id.toLowerCase());
				}
				var tag = service.tpl.replace('{id}', id);
				element.append(tag);
			}
		  }
      }
    };
  }]);
