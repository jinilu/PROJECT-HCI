// Define variables to store input values
let bookingDetails = {};

// Function to capture booking details from Japanbook.html
function captureBookingDetails() {
    bookingDetails.date = document.getElementById("dateInput").value;
    bookingDetails.time = document.getElementById("timeInput").value;
    bookingDetails.adultQuantity = document.querySelector('.quantity-adult').value;
    bookingDetails.childQuantity = document.querySelector('.quantity-child').value;
    bookingDetails.infantQuantity = document.querySelector('.quantity-infant').value;
}

// Function to send email with captured details
function sendEmailWithDetails() {
    // Compose email body with captured details
    const bodyMessage = `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="x-apple-disable-message-reformatting">
            <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
    
            <meta name="color-scheme" content="light">
            <meta name="supported-color-schemes" content="light">
    
            
            <!--[if !mso]><!-->
              
            <!--<![endif]-->
    
            <!--[if mso]>
              <style>
                  // TODO: fix me!
                  * {
                      font-family: sans-serif !important;
                  }
              </style>
            <![endif]-->
        
            
            <!-- NOTE: the title is processed in the backend during the campaign dispatch -->
            <title></title>
    
            <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            
        <style>
            :root {
                color-scheme: light;
                supported-color-schemes: light;
            }
    
            html,
            body {
                margin: 0 auto !important;
                padding: 0 !important;
                height: 100% !important;
                width: 100% !important;
    
                overflow-wrap: break-word;
                -ms-word-break: break-all;
                -ms-word-break: break-word;
                word-break: break-all;
                word-break: break-word;
            }
    
    
            
      direction: undefined;
      center,
      #body_table {
        
      }
    
      ul, ol {
        padding: 0;
        margin-top: 0;
        margin-bottom: 0;
      }
    
      li {
        margin-bottom: 0;
      }
    
      
    
      .list-block-list-outside-left li {
        margin-left: 20px !important;
      }
    
      .list-block-list-outside-right li {
        margin-right: 20px !important;
      }
    
      
        .paragraph {
          font-size: 14px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #5f5f5f;
          
        }
      
    
        .heading1 {
          font-size: 28px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #7c151a;
          
        }
      
    
        .heading2 {
          font-size: 20px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #7C151A;
          
        }
      
    
        .heading3 {
          font-size: 16px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #7C151A;
          
        }
      
    
        .list {
          font-size: 14px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #5f5f5f;
          
        }
      
    
      p a, 
      li a {
        
      display: inline-block;  
        color: #3498DB;
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
    
      }
    
      .button-table a {
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
      }
    
      .paragraph > span {text-decoration: none;}.heading1 > span {text-decoration: none;}.heading2 > span {text-decoration: none;}.heading3 > span {text-decoration: none;}.list > span {text-decoration: none;}
    
    
            * {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
    
            div[style*="margin: 16px 0"] {
                margin: 0 !important;
            }
    
            #MessageViewBody,
            #MessageWebViewDiv {
                width: 100% !important;
            }
    
            table {
                border-collapse: collapse;
                border-spacing: 0;
                mso-table-lspace: 0pt !important;
                mso-table-rspace: 0pt !important;
            }
            table:not(.button-table) {
                border-spacing: 0 !important;
                border-collapse: collapse !important;
                table-layout: fixed !important;
                margin: 0 auto !important;
            }
    
            th {
                font-weight: normal;
            }
    
            tr td p {
                margin: 0;
            }
    
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            a[x-apple-data-detectors],
    
            .unstyle-auto-detected-links a,
            .aBn {
                border-bottom: 0 !important;
                cursor: default !important;
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            .im {
                color: inherit !important;
            }
    
            .a6S {
                display: none !important;
                opacity: 0.01 !important;
            }
    
            img.g-img+div {
                display: none !important;
            }
    
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                u~div .contentMainTable {
                    min-width: 320px !important;
                }
            }
    
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                u~div .contentMainTable {
                    min-width: 375px !important;
                }
            }
    
            @media only screen and (min-device-width: 414px) {
                u~div .contentMainTable {
                    min-width: 414px !important;
                }
            }
        </style>
    
        <style>
            @media only screen and (max-device-width: 600px) {
                .contentMainTable {
                    width: 100% !important;
                    margin: auto !important;
                }
                .single-column {
                    width: 100% !important;
                    margin: auto !important;
                }
                .multi-column {
                    width: 100% !important;
                    margin: auto !important;
                }
                .imageBlockWrapper {
                    width: 100% !important;
                    margin: auto !important;
                }
            }
            @media only screen and (max-width: 600px) {
                .contentMainTable {
                    width: 100% !important;
                    margin: auto !important;
                }
                .single-column {
                    width: 100% !important;
                    margin: auto !important;
                }
                .multi-column {
                    width: 100% !important;
                    margin: auto !important;
                }
                .imageBlockWrapper {
                    width: 100% !important;
                    margin: auto !important;
                }
            }
        </style>
        <!--[if mso | IE]>
    <style>
    .button-a1jRV4u79pPy5LGfj2Oz3 { padding: 12px 24px; };
    .button-a1jRV4u79pPy5LGfj2Oz3 a { margin: -12px -24px; }; </style>
    <![endif]-->
        
    <!--[if mso | IE]>
        <style>
            .list-block-outlook-outside-left {
                margin-left: -18px;
            }
        
            .list-block-outlook-outside-right {
                margin-right: -18px;
            }
    
            a:link, span.MsoHyperlink {
                mso-style-priority:99;
                
      display: inline-block;  
        color: #3498DB;
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
    
            }
        </style>
    <![endif]-->
    
    
        </head>
    
        <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #efefef;">
            <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #efefef;">
                <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" id="body_table" style="background-color: #efefef;">
                <tbody>    
                    <tr>
                        <td>
                        <![endif]-->
                            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: auto;" class="contentMainTable">
                                <tr class="wp-block-editor-spacerblock-v1"><td style="background-color:#EFEFEF;line-height:30px;font-size:30px;width:100%;min-width:100%">&nbsp;</td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 20px 20px 20px;background-color:#EFEFEF"><p class="paragraph" style="font-family:Helvetica, sans-serif;text-align:right;line-height:10.35px;font-size:9px;margin:0;color:#5f5f5f;word-break:normal">Unable to view? Read it <a href="{view}" data-type="mergefield" data-id="a7df8b07-1982-42c7-aef7-5bd0ca9b101c-yXKP-IaO-01QI2P_zhVB2" data-filename="" class="a7df8b07-1982-42c7-aef7-5bd0ca9b101c-yXKP-IaO-01QI2P_zhVB2" data-mergefield-value="view" data-mergefield-input-value="" style="color: #3498DB; display: inline-block;">Online</a></p></td></tr><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#00EDF5;padding-top:20px;padding-bottom:30px;padding-left:20px;padding-right:20px" align="center"><table align="center" width="112" class="imageBlockWrapper" style="width:112px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/ee0a7c8a-9dd1-473a-a4e1-eddeb44a132c/432869053_1125885701869261_5440541884617776561_n.png" width="112" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr><tr><td style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:0;background-color:#a6a6a6"><table role="presentation" class="multi-column" style="width:600px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:0" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1"><td style="width:300px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="300" style="width:300px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#EFEFEF;padding-top:0;padding-bottom:0;padding-left:0;padding-right:0" align="center"><table align="center" width="300" class="imageBlockWrapper" style="width:300px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/ee0a7c8a-9dd1-473a-a4e1-eddeb44a132c/images.jfif" width="300" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr></tbody></table></td><td style="width:300px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="right" border="0" class="single-column" width="300" style="width:300px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#A6A6A6;display:block;padding-top:20px;padding-right:20px;padding-bottom:8px;padding-left:20px;text-align:center"><p style="font-family:Comic Sans, &quot;Comic Sans MS&quot;, cursive;text-align:center;line-height:32.20px;font-size:28px;background-color:#A6A6A6;color:#7c151a;margin:0;word-break:normal" class="heading1">OUR TEAM CARES ABOUT YOUR FULL RELAX</p></td></tr><tr class="wp-block-editor-listblock-v1"><td style="background-color:#A6A6A6;padding:0px 20px 0px 20px"><div class="list-block-outlook-outside-left"><ul class="paragraph list-block-list-outside-left" style="padding:0;font-family:Georgia, serif;text-align:left;line-height:21.00px;font-size:14px;color:#ffffff;list-style-type:disc;list-style-position:outside;word-break:normal" start="1"><li><span style="letter-spacing: undefinedpx"> We're wanderlust warriors crafting unique adventures.We unlock hidden gems for adventurers seeking the road less traveled. Travel deeper than sightseeing with us.  Unforgettable experiences await - let's explore!<br></span></li></ul></div></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 20px 20px 20px;background-color:#A6A6A6"><p class="paragraph" style="font-family:Helvetica, sans-serif;text-align:right;line-height:16.10px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal"><span style="color:#3498db">Visit our website &gt;&gt;</span></p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#E6E4E4;display:block;padding-top:30px;padding-right:20px;padding-bottom:0;padding-left:20px"><p style="font-family:Helvetica, sans-serif;line-height:32.20px;font-size:28px;background-color:#E6E4E4;color:#7c151a;margin:0;word-break:normal" class="heading1">HELLO MR/MRS,</p></td></tr><tr><td style="padding-top:12px;padding-left:0;padding-right:0;padding-bottom:0;background-color:#e6e4e4"><table role="presentation" class="multi-column" style="width:600px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:12px;padding-left:0;padding-right:0;padding-bottom:0" class="wp-block-editor-onecolumnsblock-v1"><td style="width:600px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="600" style="width:600px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#e6e4e4;display:block;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px"><p style="font-family:Helvetica, sans-serif;line-height:NaNpx;letter-spacing:0;font-size:20px;background-color:#e6e4e4;color:#7C151A;margin:0;word-break:normal" class="heading2"><span style="color:#0f59ff"><span style="font-weight: bold" class="bold">Booking Details:</span></span></p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 20px 20px 20px;background-color:#E6E4E4">
                                <h1 class="paragraph" style="font-family:Helvetica, sans-serif;line-height:NaNpx;font-size:14px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">
                                Date: ${bookingDetails.date}<br><br>
                                Time: ${bookingDetails.time}<br><br>
                                Adult Tickets: ${bookingDetails.adultQuantity}<br><br>
                                Child Tickets: ${bookingDetails.childQuantity}<br><br>
                                Infant Tickets: ${bookingDetails.infantQuantity}<br><br>
                                </h1></td></tr>
                                <tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#00EDF5;display:block;padding-top:30px;padding-right:20px;padding-bottom:20px;padding-left:20px;text-align:center"><p style="font-family:Comic Sans, &quot;Comic Sans MS&quot;, cursive;text-align:center;line-height:32.20px;font-size:28px;background-color:#00EDF5;color:#7c151a;margin:0;word-break:normal" class="heading1"><span style="color:#b8464c">We are the best company for your visit</span></p></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 20px 20px 20px;background-color:#969999"><p class="paragraph" style="font-family:Georgia, serif;text-align:center;line-height:21.00px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal"><span style="color:#ffffff">After decades of experience, and a whole life in the Philippines, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!</span></p></td></tr><tr class="wp-block-editor-buttonblock-v1" align="center"><td style="background-color:#00EDF5;padding-top:20px;padding-right:20px;padding-bottom:30px;padding-left:20px;width:100%" valign="top"><table role="presentation" cellspacing="0" cellpadding="0" class="button-table"><tbody><tr><td valign="top" class="button-a1jRV4u79pPy5LGfj2Oz3 button-td button-td-primary" style="cursor:pointer;border:none;border-radius:26px;background-color:#e01d27;font-size:16px;font-family:Helvetica, sans-serif;width:fit-content;text-decoration:none;color:#ffffff;overflow:hidden"><a style="color:#ffffff;display:block;padding:12px 24px 12px 24px">Call to action</a></td></tr></tbody></table></td></tr><tr><td style="padding-top:16px;padding-left:0;padding-right:0;padding-bottom:0;background-color:#fff"><table role="presentation" class="multi-column" style="width:600px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:16px;padding-left:0;padding-right:0;padding-bottom:0" class="wp-block-editor-twocolumnsrightwiderblock-v1"><td style="width:199.98px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="199.98" style="width:199.98px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#fff;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px" align="center"><table align="center" width="79.99" class="imageBlockWrapper" style="width:79.99px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/ee0a7c8a-9dd1-473a-a4e1-eddeb44a132c/images.png" width="79.99" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr></tbody></table></td><td style="width:399.96px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="right" border="0" class="single-column" width="399.96" style="width:399.96px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:28px 20px 28px 20px;background-color:#fff"><p class="paragraph" style="font-family:Helvetica, sans-serif;line-height:21.00px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal">Complete Packages For All Your Wishes</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:0;background-color:#fff"><table role="presentation" class="multi-column" style="width:600px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:0" class="wp-block-editor-twocolumnsrightwiderblock-v1"><td style="width:199.98px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="199.98" style="width:199.98px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#fff;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px" align="center"><table align="center" width="79.99" class="imageBlockWrapper" style="width:79.99px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/ee0a7c8a-9dd1-473a-a4e1-eddeb44a132c/images_(1).png" width="79.99" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr></tbody></table></td><td style="width:399.96px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="right" border="0" class="single-column" width="399.96" style="width:399.96px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:28px 20px 28px 20px;background-color:#fff"><p class="paragraph" style="font-family:Helvetica, sans-serif;line-height:21.00px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal">Over 5 Years Of Experience</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:16px;background-color:#fff"><table role="presentation" class="multi-column" style="width:600px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:16px" class="wp-block-editor-twocolumnsrightwiderblock-v1"><td style="width:199.98px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="199.98" style="width:199.98px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#fff;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px" align="center"><table align="center" width="79.99" class="imageBlockWrapper" style="width:79.99px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/ee0a7c8a-9dd1-473a-a4e1-eddeb44a132c/tour-guide.png" width="79.99" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr></tbody></table></td><td style="width:399.96px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="right" border="0" class="single-column" width="399.96" style="width:399.96px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:28px 20px 28px 20px;background-color:#fff"><p class="paragraph" style="font-family:Helvetica, sans-serif;line-height:21.00px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal">Expert Guides For You</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:16px;background-color:#fff"><table role="presentation" class="multi-column" style="width:600px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:16px" class="wp-block-editor-twocolumnsrightwiderblock-v1"><td style="width:199.98px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="199.98" style="width:199.98px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#fff;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px" align="center"><table align="center" width="79.99" class="imageBlockWrapper" style="width:79.99px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/ee0a7c8a-9dd1-473a-a4e1-eddeb44a132c/images_(2).png" width="79.99" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr></tbody></table></td><td style="width:399.96px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="right" border="0" class="single-column" width="399.96" style="width:399.96px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:28px 20px 28px 20px;background-color:#fff"><p class="paragraph" style="font-family:Helvetica, sans-serif;line-height:21.00px;font-size:14px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">Guaranteed fun at the best price!</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:15px 5px 5px 5px;background-color:#000000"><p class="paragraph" style="font-family:Helvetica, sans-serif;text-align:center;line-height:16.10px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal"><span style="color:#ffffff">Feel free to contact us anytime.</span></p></td></tr><tr><td style="padding-top:8px;padding-left:0;padding-right:0;padding-bottom:8px;background-color:#000000"><table role="presentation" class="multi-column" style="width:600px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:8px;padding-left:0;padding-right:0;padding-bottom:8px" class="wp-block-editor-threecolumnsblock-v1"><td style="width:199.98px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="199.98" style="width:199.98px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:5px 5px 5px 5px;background-color:#000000"><p class="paragraph" style="font-family:Helvetica, sans-serif;text-align:center;line-height:16.10px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal"><span style="color:#FFFFFF"><span style="font-weight: bold" class="bold">WonderLust</span></span></p></td></tr></tbody></table></td><td style="width:199.98px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="199.98" style="width:199.98px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:5px 5px 5px 5px;background-color:#000000"><p class="paragraph" style="font-family:Helvetica, sans-serif;text-align:center;line-height:16.10px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal"><span style="color:#E01D27">tourpackage.wanderlust@gmail.com</span></p></td></tr></tbody></table></td><td style="width:199.98px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="right" border="0" class="single-column" width="199.98" style="width:199.98px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:5px 5px 5px 5px;background-color:#000000"><p class="paragraph" style="font-family:Helvetica, sans-serif;text-align:center;line-height:16.10px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal"><span style="color:#ffffff"> +639958536560</span></p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="wp-block-editor-socialiconsblock-v1" role="article" aria-roledescription="social-icons" style="display:table-row;background-color:#000000"><td style="width:100%"><table style="background-color:#000000;width:100%;padding-top:20px;padding-bottom:30px;padding-left:20px;padding-right:20px;border-collapse:separate !important" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td align="center" valign="top"><div style="max-width:560px"><table role="presentation" style="width:100%" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="top"><div style="margin-left:auto;margin-right:auto;margin-top:-6px;margin-bottom:-6px;width:100%;max-width:168px"><table role="presentation" style="padding-left:196" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><td><table role="presentation" align="left" style="float:left" class="single-social-icon" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-top:6px;padding-bottom:6px;padding-left:12px;padding-right:12px;border-collapse:collapse !important;border-spacing:0;font-size:0"><a class="social-icon--link" href="https://facebook.com" target="_blank" rel="noreferrer"><img src="https://template-editor-assets.s3.eu-west-3.amazonaws.com/assets/social-icons/facebook/facebook-square-outline-white.png" width="32" height="32" style="max-width:32px;display:block;border:0" alt="Facebook"></a></td></tr></tbody></table><table role="presentation" align="left" style="float:left" class="single-social-icon" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-top:6px;padding-bottom:6px;padding-left:12px;padding-right:12px;border-collapse:collapse !important;border-spacing:0;font-size:0"><a class="social-icon--link" href="https://twitter.com" target="_blank" rel="noreferrer"><img src="https://template-editor-assets.s3.eu-west-3.amazonaws.com/assets/social-icons/x/x-square-outline-white.png" width="32" height="32" style="max-width:32px;display:block;border:0" alt="X (formerly Twitter)"></a></td></tr></tbody></table><table role="presentation" align="left" style="float:left" class="single-social-icon" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-top:6px;padding-bottom:6px;padding-left:12px;padding-right:12px;border-collapse:collapse !important;border-spacing:0;font-size:0"><a class="social-icon--link" href="https://instagram.com" target="_blank" rel="noreferrer"><img src="https://template-editor-assets.s3.eu-west-3.amazonaws.com/assets/social-icons/instagram/instagram-square-outline-white.png" width="32" height="32" style="max-width:32px;display:block;border:0" alt="Instagram"></a></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div></td></tr></tbody></table></td></tr><tr><td valign="top" align="center" style="padding:20px 20px 20px 20px;background-color:#fff"><p aria-label="Unsubscribe" class="paragraph" style="font-family:Helvetica, sans-serif;text-align:center;line-height:15.00px;font-size:10px;margin:0;color:#5f5f5f;word-break:normal">If you no longer wish to receive mail from us, you can <a href="{unsubscribe}" data-type="mergefield" data-filename="" data-id="5b7a5269-5d3a-457b-876e-d7b0b074baec-IrX_vsRj_2c2l2kd6bHWD" class="5b7a5269-5d3a-457b-876e-d7b0b074baec-IrX_vsRj_2c2l2kd6bHWD" data-mergefield-value="unsubscribe" data-mergefield-input-value="" style="color: #3498DB; display: inline-block;">unsubscribe</a>.<br>{accountaddress}</p></td></tr>
                            </table>
                        <!--[if mso | IE]>
                        </td>
                    </tr>
                </tbody>
                </table>
                <![endif]-->
            </center>
        </body>
    </html>`;
        
    // Use Email.send() to send the email with the composed bodyMessage
    Email.send({
        SecureToken: "30441a16-942e-46f7-9655-66add9a75c5e",
        Host: "smtp.elasticemail.com",
        Username: "tourpackage.wanderlust@gmail.com",
        Password: "4A9A7C1809558F4A01C60764CAEF6A023E80",
        To: 'tourpackage.wanderlust@gmail.com',
        From: "tourpackage.wanderlust@gmail.com",
        Subject: "BOOKING DETAILS: TourPackage of WanderLust",
        Body: bodyMessage
    }).then(
        message => {
            Swal.fire({
                title: "Email Sent!",
                text: "Your data has been sent.",
                icon: "success",
                confirmButtonColor: "#3085d6"
            }).then(() => {
                // After showing the success message, navigate to Japanbook2.html
                window.location.href = "Thailandbook2.html";
            });
        }
    );
}

// Event listener to capture details when the "Next" button is clicked
document.querySelector('.next').addEventListener("click", () => {
    if (window.location.pathname.includes("Thailandbook.html")) {
        Swal.fire({
            title: "Do you want to proceed?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed!"
        }).then((result) => {
            if (result.isConfirmed) {
                // If user confirms, send email with details
                sendEmailWithDetails();
            }
        });
    }
});
