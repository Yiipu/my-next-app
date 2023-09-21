import Script from "next/script"

function PtengineAnalytics() {
    return (
        <>
            {/* Ptengine Analytics */}
            < Script type="text/javascript" id="ptengine-analytics">
                {`
                    if(!window._pt_sp_2){
                        window._pt_lt = new Date().getTime();
                        window._pt_sp_2 = [];
                        _pt_sp_2.push("setAccount,767785d1");
                        var _protocol =(("https:" == document.location.protocol) ? " https://" : " http://");
                        (function() {
                            var atag = document.createElement("script");
                            atag.type = "text/javascript";
                            atag.async = true;
                            atag.src = _protocol + "js.ptengine.cn/767785d1.js";
                            var s = document.getElementsByTagName("script")[0];
                            s.parentNode.insertBefore(atag, s);
                        })();
                    }
                `}
            </Script >
        </>
    )
}


// 在中国大陆不要使用 Google Analytics
function GoogleAnalytics() {
    return (
        <>
            {/* Google Analytics */}
            <Script
                src='https://www.googletagmanager.com/gtag/js?id=G-S72BH8NKD1'
                strategy="afterInteractive"
            />
            <Script id='google-analytics' strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-xxxxxxxxxx');
                `}
            </Script>
        </>
    )
}

export {PtengineAnalytics, GoogleAnalytics}