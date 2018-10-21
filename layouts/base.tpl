<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{the_title or "No title"}}</title>
    <link rel="stylesheet" href="assets/vendor/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome-animation.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

    <link rel="stylesheet" href="assets/css/main.css" />
</head>

<body >
    <!-- Header with navigation -->
    <div class="wrapper"  style="background-image: url('assets/img/star-tile.jpg'); background-size: 100%;">
        <div class="header" >
            <nav class="navbar navbar-light navbar-expand-md navigation">
                <div class="container"><a class="navbar-brand" href="/">
                <!--Rocket Launch App-->
                <img class="logo" src="assets/img/LOGO.jpg">
                </a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    
                    <div class="collapse navbar-collapse"
                        id="navcol-1">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <!-- End of header -->

        <div class="container">
            {{!base}}
            <br>
            <div class="row">
                <div class="col-sm-12 offset-11">
                    <button onclick="goToTop()" id="upButton" title="Go to the top"><i class="fa fa-angle-up"></i></button>
                </div>
            </div>
        </div>
    </div>
    <!-- Start footer -->
    <div class="footer">
        <footer>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Home</a></li>
            </ul>
            <p class="copyright">Αριστοτέλης Χρήστου, Αντώνης Σπανός, Δημήτρης Δεδούσης © 2018</p>
        </footer>
    </div>
    <!-- End footer -->

    <script src="assets/vendor/js/jquery.min.js"></script>
    <script src="assets/vendor/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  	<script src="assets/js/main.js"></script>
    <script src="https://addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>

</body>

</html>
