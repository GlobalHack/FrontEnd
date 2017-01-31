define(
    [
        'react',
        'jquery',
    ],
    function (React, $) {
        var NavigationMenu = React.createClass({
            render: function () {
                var style = {
                    display: "none"
                };

                return (
                    <aside className="main-sidebar">
                        {/* sidebar: style can be found in sidebar.less */}
                        <section className="sidebar" >
                            {/* Sidebar user panel */}
                            <div className="user-panel">
                                <div className="pull-left image">
                                    <img src="http://lorempixel.com/160/160/" className="img-circle" alt="User Image" />
                                </div>
                                <div className="pull-left info">
                                    <p>UserName</p>
                                </div>
                            </div>
                            {/* search form */}
                            <form action="#" method="get" className="sidebar-form">
                                <div className="input-group">
                                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                                    <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                                  </span>
                                </div>
                            </form>
                            {/* /.search form */}
                            {/* sidebar menu: : style can be found in sidebar.less */}
                            <ul className="sidebar-menu">
                                <li className="header">MAIN NAVIGATION</li>
                                <li className="active treeview">
                                    <a href="#">
                                        <i className="fa fa-dashboard"></i>
                                        <span>
                                            Dashboard
                                        </span>
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li className="active"><a href="/"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                                        <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="fa fa-files-o"></i>
                                        <span>Layout Options</span>
                                        <span className="label label-primary pull-right">4</span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                        <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                        <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                        <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="widgets.html">
                                        <i className="fa fa-th"></i>
                                        <span>Widgets</span>
                                        <small className="label pull-right bg-green">new</small>
                                    </a>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="fa fa-pie-chart"></i>
                                        <span>Charts</span>
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                                        <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                                        <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                                        <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="fa fa-edit"></i> <span>Forms</span>
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                                        <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                                        <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
                                    </ul>
                                </li>
                                <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                                <li className="header">LABELS</li>
                                <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
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
