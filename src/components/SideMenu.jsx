import baradariLogo from "../assets/footerlogo.png";

const SideMenu = () => {
  return  <div className="flex flex-col">
      <div>
        <img src={baradariLogo} alt="baradari logo" />
      </div>
      <div>
        <ul>
            <li>About</li>
            <li>How To Book</li>
            <li>Members</li>
            <li>Events</li>
            <li>Reviews</li>
        </ul>
      </div>
    </div>
}

export default SideMenu