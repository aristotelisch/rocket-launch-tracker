<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{the_title or "No title"}}</title>
    <link rel="stylesheet" href="assets/css/main.css" />
</head>

<body>
    <!-- Header with navigation -->
    <div class="header">
        <nav class="navbar navbar-light navbar-expand-md navigation">
            <div class="container"><a class="navbar-brand" href="/">Launch</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse"
                    id="navcol-1">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item" role="presentation"><a class="nav-link" href="/">Dashboard</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <!-- End of header -->

    {{!base}}

    <div class="clearfix"></div>
    <!-- Start footer -->
    <div class="footer">
        <footer>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Launch</a></li>
            </ul>

        </footer>
    </div>
    <!-- End footer -->

  	<script src="assets/js/main.js"></script>
</body>

</html>
