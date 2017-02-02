define(
    [
        'react',
        './message-item'
    ],
    function (React, MessageItem) {
        var HeaderMessages = React.createClass({
            getInitialState: function () {
                return {
                    messages: []
                }
            },
            componentDidMount: function(){
                var messages = [{
                    title: 'Support Team',
                    displayPicture: 'http://lorempixel.com/160/160/',
                    content: 'Why not buy a new awesome theme?',
                    time: '5 mins',
                }, {
                    title: 'AdminLTE Design Team',
                    displayPicture: 'http://lorempixel.com/128/128/',
                    content: 'Why not buy a new awesome theme?',
                    time: '2 hours',
                }, {
                    title: 'Developers',
                    displayPicture: 'http://lorempixel.com/128/128/',
                    content: 'Why not buy a new awesome theme?',
                    time: 'Today',
                }, {
                    title: 'Sales Department',
                    displayPicture: 'http://lorempixel.com/128/128/',
                    content: 'Why not buy a new awesome theme?',
                    time: 'Yesterday',
                }, {
                    title: 'Reviewers',
                    displayPicture: 'http://lorempixel.com/128/128/',
                    content: 'Why not buy a new awesome theme?',
                    time: '2 days',
                }];

                this.setState({
                    messages: messages
                });
            },
            render: function () {
                var that = this;

                var messageList = this.state.messages.map(function (messageDetails, iterator) {
                    return (
                        <MessageItem
                            key={iterator}
                            title={messageDetails.title}
                            displayPicture={messageDetails.displayPicture}
                            time={messageDetails.time}
                            content={messageDetails.content} />
                    )
                });

                return (
                    <li className="dropdown messages-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-envelope-o"></i>
                            <span className="label label-success">{that.state.messages.length}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header">You have {this.state.messages.length} messages</li>
                            <li>
                                {/* inner menu: contains the actual data */}
                                <div className="slimScrollDiv" >

                                    <ul className="menu" >
                                        {messageList}
                                    </ul>

                                    <div className="slimScrollBar"></div>
                                    <div className="slimScrollRail"></div>
                                </div>
                            </li>
                            <li className="footer"><a href="#">See All Messages</a></li>
                        </ul>
                    </li>

                )
            }
        });

        return HeaderMessages;
    }
)
