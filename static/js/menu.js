window.onload = function() {
	$stMenu = document.getElementById('st_menu');
	$stMenu.innerHTML = '<div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#"><span class="glyphicon glyphicon-console" aria-hidden="true"></span></a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="#">Главная</a></li><li><a href="#">О приложении</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Услуги <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Терапевтическая стоматология</a></li><li><a href="#">Ортопедическая стоматология</a></li><li><a href="#">Хирургическая стоматология</a></li><li role="separator" class="divider"></li><li class="dropdown-header">Информация</li><li><a href="#">Гигиена</a></li><li><a href="../flame.html">Flame</a></li></ul></li><li><a href="#">Контакты</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> Задать вопрос</a></li></ul></div></div>';
}