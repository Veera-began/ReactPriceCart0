import './App.css';
import Card from "./Card"

function App() {
  let free ={
    title: "FREE",
    price: "0",
    user: "Single User",
    userEnabler: true,
    storage: "5GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    community: "Community Access",
    communityEnabler: true,
    unlimitedPrivateProject: "Unlimited Private Projects",
    unlimitedPrivateProjectEnabler: false,
    dedicated: "Dedicated Phone Support",
    dedicatedEnabler: false,
    freeSubdomain: "Free Subdomain",
    freeSubdomainEnabler: false,
    monthlySupport: "Monthly Status Reports",
    monthlySupportEnabler: false
  }
  let pro ={
    title: "PRO",
    price: "49",
    user: "Unlimited Users",
    userEnabler: true,
    storage: "150GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    community: "Community Access",
    communityEnabler: true,
    unlimitedPrivateProject: "Unlimited Private Projects",
    unlimitedPrivateProjectEnabler: true,
    dedicated: "Dedicated Phone Support",
    dedicatedEnabler: true,
    freeSubdomainPrefix: "Unlimited",
    freeSubdomain: "Free Subdomain",
    freeSubdomainEnabler: true,
    monthlySupport: "Monthly Status Reports",
    monthlySupportEnabler: true,
  }
  let plus ={
    title: "PLUS",
    price: "9",
    user: "5 User",
    userEnabler: true,
    storage: "50GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    community: "Community Access",
    communityEnabler: true,
    unlimitedPrivateProject: "Unlimited Private Projects",
    unlimitedPrivateProjectEnabler: true,
    dedicated: "Dedicated Phone Support",
    dedicatedEnabler: true,
    freeSubdomain: "Free Subdomain",
    freeSubdomainEnabler: true,
    monthlySupport: "Monthly Status Reports",
    monthlySupportEnabler: false
  }
  return (
    <>
    <section className="pricing py-5">
    <div className="container">
    
    <div className="row">
      {/* <!-- Free Tier --> */}
      <Card type={free}/>
      <Card type={plus}/>
      <Card type={pro}/>
    </div>
  </div>
</section>
    </>

  );
}

export default App;
