$(document).ready(function () {
    $(document).delegate(".orderBtn", "click", function () {
        var PlanID = $(this).data("id");
        $("#planInput").val(PlanID);
    })

    $(document).delegate("#payment", "change", function () {
        var Value = $(this).val();
        if( Value == 0 )
            $("#screen").fadeOut();
        else
            $("#screen").fadeIn()
    })
});

!function(){const e=document.documentElement;if(e.classList.remove("no-js"),e.classList.add("js"),document.body.classList.contains("has-animations")){const e=window.sr=ScrollReveal();e.reveal(".hero-title, .hero-paragraph, .hero-cta",{duration:1e3,distance:"40px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"left",interval:150}),e.reveal(".hero-illustration",{duration:1e3,distance:"40px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"right",interval:150}),e.reveal(".feature",{duration:1e3,distance:"40px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",interval:100,origin:"bottom",scale:.9,viewFactor:.5}),document.querySelectorAll(".pricing-table").forEach(i=>{const t=[].slice.call(i.querySelectorAll(".pricing-table-header")),a=[].slice.call(i.querySelectorAll(".pricing-table-features li")),c=[].slice.call(i.querySelectorAll(".pricing-table-cta")),r=t.concat(a).concat(c);e.reveal(r,{duration:600,distance:"20px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",interval:100,origin:"bottom",viewFactor:.5})})}}();
