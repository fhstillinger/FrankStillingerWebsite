// Copyright (c) 2002 by IBM Corporation
if (window.location.protocol != 'http:' && window.location.protocol != 'https:')
{   sa_gif    = "http://stats.surfaid.ihost.com/crc/images/uc.GIF"; }
else
{   sa_gif    = "//stats.surfaid.ihost.com/crc/images/uc.GIF"; }
sa_domain = "";
sa_ver    = "1.21";
sa_click="";lv_document=document;lv_undefined="undefined";function sl(){lv_cust="";lv_site="";lv_customer_cookie_name="";lv_customer_cookie_value="";if((typeof(SA_ID)!=lv_undefined)&&(SA_ID!=null)){var pv_UserVariable=SA_ID.split(';');lv_cust=pv_UserVariable[0];lv_site=pv_UserVariable[1];if(pv_UserVariable.length>2){lv_customer_cookie_name=pv_UserVariable[2];}}lv_date=new Date();lv_rn=Math.random().toString().substring(2,10)+lv_date.getTime().toString();if(lv_customer_cookie_name){lv_allcookies=lv_document.cookie;if((lv_i_sid=lv_allcookies.indexOf(lv_customer_cookie_name))!=-1){lv_start=lv_i_sid+lv_customer_cookie_name.length+1;lv_end=lv_allcookies.indexOf(";",lv_start);if(lv_end==-1)lv_end=lv_allcookies.length;lv_customer_cookie_value=escape(lv_customer_cookie_name+"="+lv_allcookies.substring(lv_start,lv_end));}}lv_screen=(typeof(screen)==lv_undefined||screen==null)?'0x0x0':screen.colorDepth+"x"+screen.width+"x"+screen.height;lv_onepix="?"+sa_ver+"&"+escape(lv_cust)+"&"+escape(lv_site)+"&"+((typeof(SA_Location)==lv_undefined||SA_Location==null)?(sa_click?escape(sa_click):escape(location)):escape(SA_Location))+"&"+((typeof(SA_Referral)==lv_undefined||SA_Referral==null)?(sa_click?escape(location):escape(lv_document.referrer)):escape(SA_Referral))+"&"+lv_customer_cookie_value+"&"+"&"+"&"+lv_date.getTimezoneOffset()+"&"+lv_screen+"&"+lv_document.images.length.toString()+"&"+((typeof(SA_Title)==lv_undefined||SA_Title==null)?"":escape(SA_Title))+"&"+((typeof(SA_Message)==lv_undefined||SA_Message==null)?"":escape(SA_Message))+"&"+lv_rn;if(typeof(lv_document.lv_col_gif)==lv_undefined||lv_document.lv_col_gif==null){lv_document.lv_col_gif=new Image();}lv_document.lv_col_gif.src=sa_gif+lv_onepix;}
function sa_onclick(pv_click_href){window.SA_Title=(typeof(SA_Title)==lv_undefined||SA_Title==null)?"media_file":escape(SA_Title);sa_click=pv_click_href;if((navigator.appName.indexOf("Netscape")!=-1)){setTimeout("sl()",0);}else{sl();}return(true);}
if(typeof(lv_document.lv_col_gif)==lv_undefined||lv_document.lv_col_gif==null){sl();}
