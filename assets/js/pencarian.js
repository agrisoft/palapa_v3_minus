//API untuk walidata http://192.168.100.55:8000/api/

 $.ajax({
          url:  _api + "sisteminfo",
          async: false
        }).success(function(data) {
              window.extent1 = data['extent'];
               console.log(extent1);
           });
 


$('document').ready(function(){
 
  
  setTimeout(function(){
    $('#demo').jplist({
        itemsBox: '.list'
        ,itemPath: '.list-item'
        ,panelPath: '.jplist-panel'
    });},2000);

  }); 
 




  $.get( _api + "group/listl", function( data ) {
    listdata = (data);
    //console.log(listdata);
    for (i=0; i < listdata.length; i++){
      //console.log(listdata[i]);

      
     
      $('#walidata-logo-slider').append('<div class="item"><div class="client-face"><img src="data:;base64,'+listdata[i]['logo']+'" alt="" style="height:80px;"></div><div class="client-text"><a href="#"><h4><strong>'+listdata[i]['name']+' </strong></h4></a><h6>'+listdata[i]['jumlah_data']+' dataset</h6></div></div>');
      
      
          $('#lunchBegins2').append('<option>'+listdata[i]['name']+'</option>')

          $('#basic').append('<option data-path=".'+listdata[i]['name']+'">'+listdata[i]['name']+'</option>');  
         


         $('#ul_walidata').append('<li><div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0"><a href="single.html"><img src="data:;base64,'+listdata[i]['logo']+'" alt="" style="height:80px;"></a></div><div class="col-md-8 col-sm-8 col-xs-8 blg-entry"><h6><a href="single.html">'+listdata[i]['name']+'</a></h6><span class="property-price">'+listdata[i]['jumlah_data']+' dataset</span></div></li>'); 
      }
     
         $('#jumlah_wali_data').text(String(listdata.length));
  });

  //API untuk Kagori

  jQuery.ajax({
    url: _api + 'jumlahdataset',
    success: function (result) {
      var listdata = (result);
      for (var i=0; i < listdata.length; i++){
        //  console.log(listdata[i]);
        console.log(listdata[i]['keywords']);

          
        $('#lunchBegins').append('<option data-path=".'+listdata[i]['keywords']+'">'+listdata[i]['keywords']+'</option>');   

        $('#kategori_dataset').append('<div class="col-sm-2 col-xs-6"><div class="count-item"><div class="count-item-circle"><img src="data:;base64,'+listdata[i]['logo']+'" alt="" style="height:80px;"></div><div class="chart"><h6><a href="">'+listdata[i]['keywords']+'</a></h6><span class="jumlah_dataset badge badge-pill badge-danger">'+listdata[i]['jumlah']+'</span></div></div></div>');

        $('#ul_kategori').append('<li><div class="col-md-12 col-sm-12 col-xs-12"><ul class="footer-menu"><li><a href="#">&raquo; '+listdata[i]['keywords']+' </a><span class="jumlah_dataset_pencarian badge badge-pill badge-primary pull-right">'+listdata[i]['jumlah']+'</span></li></ul></div></li>');

      }
    },
    async: false
  });




  //API untuk sistem info http://192.168.100.55:8000/api/
  $.get( _api + "sisteminfo", function( data ) {
    //listdata = JSON.parse(data);
    console.log(data);
    $('#title-index').text('Home :: Geoportal ' + data['organization']);
    $('#title-jelajah').text('Jelajah :: Geoportal ' + data['organization']);
    $('#title-pencarian').text('Pencarian Data :: Geoportal ' + data['organization']);
    $('#title-kontak').text('Kontak Kami :: Geoportal ' + data['organization']);

    $('#organisasi').text(data['organization']);
    $('#organisasi-body').text(data['organization']);
    $('#country').text(data['country'])
    $('#alamat-body').text(data['address'] + ', ' + data['city']+ ', ' + data['postalcode']+ ', ' + data['administrativearea']);
    $('#alamat-footer').text(data['address'] + ', ' + data['city']+ ', ' + data['postalcode']+ ', ' + data['administrativearea'] + ', ' + data['country']);
    $('#email-body').text(data['email']);
    $('#email-footer').text('Email: ' + data['email']);
    $('#phone-body').text('Telp: ' + data['phone']);
    $('#phone').text('Telp: ' + data['phone']);
    $('#fax').text('Fax: ' + data['fax']);
    $('#fax-body').text('Fax: ' + data['fax']);
    $('#footer-tentang-kami').text(data['deskripsi']);
    
    $('#organisasi-logo').empty();
    $('#organisasi-logo').text('EOPORTAL ' + data['organization']);
    $('#logos').attr('src',data['logo']);

    $('#judul-slider-depan').text('Geoportal ' + data['organization']);
  });

  $.get( _api + "listmetalayer", function( data ) {
    listdata = (data);
    //console.log(listdata);
    // var str = "AGRISOFT:jalan_semarang_320020171126130704";
    
    var str ="";
    var str2 = "";
    var str3 ="";
    var image2 ="";
    var array = [];;
      //array[1] = str.split(":");
    for (i=0; i < listdata.length; i++){
      //console.log(listdata[i]);

       str = "";
       array =[];
       image2 = "";
       str =listdata[i]['identifier'];
       array[0] = str.split(":");
       str2 ="";
       str3 = "";

       str2 =listdata[i]['links']; 
       image2 =str2.split('^')[1].split(',')[3].split('?')[0];
       image2 = image2+'/reflect?format=image/png&layers='+listdata[i]['identifier']

       
       download="";
       str3 =listdata[i]['links'];
       download=str3.split('^')[0].split(',')[3];
       download = download + 'service=WFS&version=1.0.0&request=GetFeature&typeName='+listdata[i]['identifier']+'&outputFormat=shape-zip';
       
      // console.log(image2);
    //    console.log(download);
      
       $('#list-type').append(' <div class="list-item"> <div class="col-sm-6 col-md-4 p0 wow fadeInUp animated" data-wow-delay="0.2s"><div class="box-two proerty-item"><div class="item-thumb"><a href="#"><img src="'+image2+'"</a></div><div class="item-entry overflow"><h5><a href="property-1.html" class="title">'+listdata[i]['title']+' </a></h5><div class="dot-hr"></div><span class="pull-left"><b class="'+listdata[i]['keywords']+'">'+listdata[i]['keywords']+'</b></span><span class="proerty-price pull-right"><img src="assets/img/maps_look.png" width="20px" height="20px" title="Lihat peta" data-toggle="modal" data-target="#viewPeta" class="cursor_pointer"><img src="assets/img/metadata.png" width="20px" height="20px" title="Lihat metadata" data-toggle="modal" data-target="#metaData" class="cursor_pointer"><img src="assets/img/download.png" width="20px" height="20px" title="Download" data-toggle="modal" data-target="#downloadModal" class="cursor_pointer"></span><p style="display: none;">'+listdata[i]['abstract']+'</p><div class="property-icon"><b class="'+array[0][0]+'">'+array[0][0]+'</b></div></div></div></div> ');

     
      }

      // $('#jumlah_dataset').text(String(listdata.length));
  });


  $(".sort-asc").on('click', function () {
      $(".sort-desc").removeClass('active');
      $(".sort-asc").addClass('active');
  });

  $(".sort-desc").on('click', function () {
      $(".sort-asc").removeClass('active');
      $(".sort-desc").addClass('active');
  });

