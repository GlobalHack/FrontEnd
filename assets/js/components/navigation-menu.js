define(
  [
    'react',
    'jquery',
    'react-router'
  ],
  function (React, $, Router) {
    var Link = Router.Link;
    var NavigationMenu = React.createClass({
      render: function () {
        var style = {
          display: "none"
        };

        return (
          <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
              {/* search form */}
              <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                  <input type="text" name="q" className="form-control" placeholder="Search..."/>
                  <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                                      className="fa fa-search"></i></button>
                                  </span>
                </div>
              </form>
              {/* /.search form */}
              {/* sidebar menu: : style can be found in sidebar.less */}
              <ul className="sidebar-menu">
                <li className="header">MAIN NAVIGATION</li>
                <li>
                  <a href="#">
                    <i className="fa fa-th"></i>
                    <span>Users</span>
                    <small className="label pull-right bg-green">new</small>
                  </a>
                  <ul className="treeview-menu">
                    <li><Link to="/users/view"><i className="fa fa-circle-o"></i> View Users</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-th"></i>
                    <span>coordinated entry groups</span>
                    <small className="label pull-right bg-green">new</small>
                  </a>
                  <ul className="treeview-menu">
                    <li><Link to="/coordinatedentrygroups/view"><i className="fa fa-circle-o"></i> View coordinated entry groups</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-th"></i>
                    <span>Customers</span>
                    <small className="label pull-right bg-green">new</small>
                  </a>
                  <ul className="treeview-menu">
                    <li><Link to="/customers/view"><i className="fa fa-circle-o"></i> View Customers</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-th"></i>
                    <span>Employees</span>
                    <small className="label pull-right bg-green">new</small>
                  </a>
                  <ul className="treeview-menu">
                    <li><Link to="/employees/view"><i className="fa fa-circle-o"></i> View Employees</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-th"></i>
                    <span>Intakes</span>
                    <small className="label pull-right bg-green">new</small>
                  </a>
                  <ul className="treeview-menu">
                    <li><Link to="/intakes/add"><i className="fa fa-circle-o"></i> Add Intake</Link></li>
                    <li><Link to="/intakes/view"><i className="fa fa-circle-o"></i> View Intakes</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-th"></i>
                    <span>Organizations</span>
                    <small className="label pull-right bg-green">new</small>
                  </a>
                  <ul className="treeview-menu">
                    <li><Link to="/organizations/add"><i className="fa fa-circle-o"></i> Add Organization</Link></li>
                    <li><Link to="/organizations/view"><i className="fa fa-circle-o"></i> View Organizations</Link></li>
                  </ul>
                </li>
                <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a>
                </li>
                <li className="header">LABELS</li>
                <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                <li><a width="150" height="50" href="https://auth0.com/?utm_source=oss&utm_medium=gp&utm_campaign=oss"
                       target="_blank" alt="Single Sign On & Token Based Authentication - Auth0"><img width="150"
                                                                                                      height="50"
                                                                                                      alt="JWT Auth for open source projects"
                                                                                                      src="//cdn.auth0.com/oss/badges/a0-badge-dark.png"/></a>
                </li>
              </ul>
            </section>
            {/* /.sidebar */}
          </aside>
        )
      }
    });

    return NavigationMenu
  }
)
