document.addEventListener('DOMContentLoaded', () => {
    //var jq = document.createElement("script");
    //jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
    //document.head.append(jq);

    setInterval(() => {
        if(document.getElementById('ghx-header') != null){
            Array.from(document.getElementById('ghx-header').children).forEach(o => {
                if(o.id != "breadcrumbs-container")
                    o.remove();
            });
        }
        document.body.style.background = "white";
    }, 10);    
})