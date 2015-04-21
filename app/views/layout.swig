<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="/css/style.css">
  {% if ENV_DEVELOPMENT %}
    <script src="http://localhost:35729/livereload.js"></script>
  {% endif %}
</head>
<body>
  {% block content %}{% endblock %}
  <div class="container">
  <a href="/article"><h1>Welcome to {{ title }}</h1></a>
  	{% block content %} {% endblock %}

  </div>

  <script src="/js/main.js"></script>
  
</body>
</html>
