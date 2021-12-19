import React from 'react'

function Card(props) {
    console.log(props)
    
    return (
            <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
            <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.type.title}</h5>
            <h6 class="card-price text-center">${props.type.price}<span class="period">/month</span></h6>
            <hr />
            <ul class="fa-ul">
              <li class={props.type.userEnabler ? "" : "text-muted"}><span class="fa-li"><i class={props.type.userEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.type.title==="FREE" ? <>{props.type.user}</> : <b>{props.type.user}</b>}</li>
              <li class={props.type.storageEnabler ? "" : "text-muted"}><span class="fa-li"><i class={props.type.storageEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.type.storage}</li>
              <li class={props.type.publicProjectsEnabler ? "" : "text-muted"}><span class="fa-li"><i class={props.type.publicProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.type.publicProjects}</li>
              <li class={props.type.communityEnabler ? "" : "text-muted"}><span class="fa-li"><i class={props.type.communityEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.type.community}</li>
              <li class={props.type.unlimitedPrivateProjectEnabler ? "" : "text-muted"}><span class="fa-li"><i class={props.type.unlimitedPrivateProjectEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.type.unlimitedPrivateProject}</li>
              <li class={props.type.dedicatedEnabler ? "" : "text-muted"}><span class="fa-li"><i class={props.type.dedicatedEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.type.dedicated}</li>
              <li class={props.type.freeSubdomainEnabler ? "" : "text-muted"}><span class="fa-li"><i class={props.type.freeSubdomainEnabler ? "fas fa-check" : "fas fa-times"}></i></span><b>{props.type.freeSubdomainPrefix}</b> {props.type.freeSubdomain}</li>
              <li class={props.type.monthlySupportEnabler ? "" : "text-muted"}><span class="fa-li"><i class={props.type.monthlySupportEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.type.monthlySupport}</li>
            </ul>
            <div class="d-grid">
              <a href="http://www.google.com" class="btn btn-primary text-uppercase">Button</a>
            </div>
            </div>
            </div>
            </div>
        
    )
}

export default Card
