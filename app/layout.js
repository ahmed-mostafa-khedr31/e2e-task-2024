import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <title>E2E Task</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="E2E Task, Shopping Card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/frontend/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/frontend/assets/css/main.css" />
        <link rel="stylesheet" href="/frontend/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/frontend/css/all.min.css" />
        <link
          rel="stylesheet"
          href="/frontend/assets/css/plugins/animate.min.css"
        />
        <link rel="stylesheet" href="/frontend/css/app.css" />
      </head>
      <body>
        {children}
        <script
          src="/frontend/assets/js/vendor/bootstrap.bundle.min.js"
          defer
        ></script>
        <script
          src="/frontend/assets/js/vendor/jquery-3.6.0.min.js"
          defer
        ></script>
        <script src="/frontend/js/jquery-lazyload.js" defer></script>
        <script
          src="/frontend/assets/js/vendor/modernizr-3.6.0.min.js"
          defer
        ></script>
        <script
          src="/frontend/assets/js/vendor/jquery-migrate-3.3.0.min.js"
          defer
        ></script>
        <script src="/frontend/assets/js/plugins/slick.js" defer></script>
        <script
          src="/frontend/assets/js/plugins/jquery.syotimer.min.js"
          defer
        ></script>
        <script src="/frontend/assets/js/plugins/waypoints.js" defer></script>
        <script src="/frontend/assets/js/plugins/wow.js" defer></script>
        <script
          src="/frontend/assets/js/plugins/slider-range.js"
          defer
        ></script>
        <script
          src="/frontend/assets/js/plugins/perfect-scrollbar.js"
          defer
        ></script>
        <script
          src="/frontend/assets/js/plugins/magnific-popup.js"
          defer
        ></script>
        <script src="/frontend/assets/js/plugins/select2.min.js" defer></script>
        <script src="/frontend/assets/js/plugins/counterup.js" defer></script>
        <script
          src="/frontend/assets/js/plugins/jquery.countdown.min.js"
          defer
        ></script>
        <script
          src="/frontend/assets/js/plugins/images-loaded.js"
          defer
        ></script>
        <script src="/frontend/assets/js/plugins/isotope.js" defer></script>
        <script src="/frontend/assets/js/plugins/scrollup.js" defer></script>
        <script
          src="/frontend/assets/js/plugins/jquery.vticker-min.js"
          defer
        ></script>
        <script
          src="/frontend/assets/js/plugins/jquery.theia.sticky.js"
          defer
        ></script>
        <script
          src="/frontend/assets/js/plugins/jquery.elevatezoom.js"
          defer
        ></script>
        <script src="/frontend/js/toastr.min.js" defer></script>
        <script src="/frontend/js/sweetalert2%4011.js" defer></script>
        <script src="/frontend/assets/js/main.js?v=5.3" defer></script>
        <script src="/frontend/assets/js/shop.js?v=5.3" defer></script>
        <script src="/frontend/js/app.js" defer></script>
      </body>
    </html>
  );
}
