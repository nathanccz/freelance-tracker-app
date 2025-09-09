export default function Navbar() {
  return (
    <div className="navbar opacity-90 bg-base-100 px-3 md:px-10 lg:px-36 sticky top-0 z-50">
      <div className="flex-1">
        {/* <a className="text-xl p-0 cursor-pointer"><img src="/logo.svg" alt="" className="w-1/2 h-1/2"/></a> */}
        ClientFlow
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <a href="/login">
            <li className="btn btn-primary">Sign In</li>
          </a>
        </ul>
      </div>
    </div>
  )
}
