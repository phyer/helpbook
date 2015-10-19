/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
book = {
    banners: [
        {
            'src': 'desk.png',
            'name': 'sdfg'
        },
        {
            'src': 'have_call.png',
            'name': 'dfh'
        },
        {
            'src': 'lockscreen.png',
            'name': 'jh'
        },
        {
            'src': 'security.png',
            'name': 'hjkl'
        }
    ],
    quicklink: [
        {
            'title': '常用手势',
            'name': 'gesture',
            'icon': 'overview.png',
            'items': [
                {
                    'name': 'single_click',
                    'title': '单击',
                    'src': 'gesture_single_click.png',
                    'content': '单击是最基本的操作，用手指轻轻触摸屏幕一次可以启动应用，随便点击几个应用试试吧。'
                },
                {
                    'name': 'double_click',
                    'title': '双击',
                    'src': 'gesture_double_click.png',
                    'content': '双击是连续点击屏幕两次。双击可以缩放内容，也可以作为用于文本选择的辅助手势 。如打开图库，选择一张图片，双击图片放大查看，再次双击即可缩小。'
                },
                {
                    'name': 'long_press',
                    'title': '长按',
                    'src': 'gesture_long_press.png',
                    'content': '按住一个条目内容不动，会弹出功能菜单或者激发其他的操作。如在桌面或列表等区域，按住目标，会进入编辑模式或弹出菜单。当你在程序中找寻不到您需要的操作时，长按条目也许会发现惊喜哦。'
                },
                {
                    'name': 'paddling',
                    'title': '滑动',
                    'src': 'gesture_paddling.png',
                    'content': '手指轻触屏幕上下滑动适用于查看未显示的区域，如查看网页，上下滑动可以查看更多区域；手指左右滑动适用于标签页和换页，如音乐，桌面等地方。'
                },
                {
                    'name': 'drag.png',
                    'title': '拖动',
                    'src': 'gesture_drag.png',
                    'content': '拖动可以帮你在视图中重新排列资料的位置 ，或者移动资料到文件夹里，如拖动桌面图标进入相应的文件夹，长按一个应用拖动一下试试。'
                },
                {
                    'name': 'flex',
                    'title': '两指缩放',
                    'src': 'gesture_flex.png',
                    'content': '在一些应用里，如地图中，支持用两根手指，如大拇指和食指在屏幕上做”捏“和 ”放“的动作，以实现放大或缩小。'
                },
            ]
        },
        {
            'title': '基本操作',
            'name': 'operate',
            'icon': 'overview.png',
            'items': [
                {
                    'name': 'quit',
                    'title': '返回',
                    'src': 'gesture_quit.png',
                    'content': '点击返回键可以返回之前界面或退出当前应用。'
                },
                {
                    'name': 'setting',
                    'title': '快捷设置',
                    'src': 'gesture_setting.png',
                    'content': '从顶部下滑出状态栏，在状态栏首页右滑 ，可以对常用功能进行开关设置，长按图标可以进入具体设置页面。点①可进入全部设置页面。'
                },
                {
                    'name': 'switch',
                    'title': '开机和关机',
                    'src': 'gesture_switch.png',
                    'content': '长按右侧的电源键，待手机轻微震动后，在弹出菜单中选择关机，即可关闭手机。在关机状态下，长按电源键3~5秒即可开启手机。'
                },
                {
                    'name': 'activation',
                    'title': '点亮或关闭屏幕',
                    'src': 'gesture_activation.png',
                    'content': '如图，屏幕锁定时，短按电源键点亮屏幕 ；反之关闭屏幕。'
                }
            ]
        },
        {
            'title': '手机设置',
            'name': 'general_setting',
            'icon': 'overview.png',
            'items': [
                {
                    'name': 'general',
                    'title': '常用设置',
                    'src': 'general_settings.png',
                    'content': '从设置>常用设置中，你可以对一些常用的功能选项进行设置，如无线WLAN数据网络设置 、设备、个人、账户和系统设置等，向玩机高手进发吧。'
                },
                {
                    'name': 'voice',
                    'title': '声音设置',
                    'src': 'voice_setting.png',
                    'content': '在设置>声音设置中，你可以调节铃声和振动，系统音等，让手机一鸣惊人。'
                },
                {
                    'name': 'display',
                    'title': '显示设置',
                    'src': 'display_setting.png',
                    'content': '在设置>全部设置>显示中，你可以调节手机的亮度、壁纸、屏幕旋转、字体大小等，更多显示设置等你去发现。'
                },
                {
                    'name': 'doublesim',
                    'title': '双卡设置',
                    'src': 'doublesim-_setting.png',
                    'content': '在全部设置>双卡管理中，①处你可以管理SIM卡状态。②处设置电话和短信默认卡，以及数据网络。'
                }
            ]
        },
        {
            'title': '桌面',
            'name': 'desk',
            'icon': 'overview.png',
            'items': [
                {
                    'name': 'unlock',
                    'title': '解锁',
                    'src': 'unlock.png',
                    'content': '按住①拖到解锁图标②即可解锁进入主屏 ，拖到其他图标开启相应功能。'
                },
                {
                    'name': 'status_bar',
                    'title': '状态栏',
                    'src': 'status_bar.png',
                    'content': '应用或系统通知会显示在状态栏中，点击后触发对应的操作。按住消息左右滑均可删除消息，点击①处可清空所有消息。'
                },
                {
                    'name': 'main_screen',
                    'title': '主屏',
                    'src': 'main_screen.png',
                    'content': '主屏可放置常用应用和小工具（widget） ，点击图标即可打开应用，点击①处进入二级菜单，查看所有应用。'
                }
            ]
        },
        {
            'title': '通信',
            'name': 'call',
            'icon': 'overview.png',
            'items': [
                {
                    'name': 'take_phone',
                    'title': '双卡打电话',
                    'src': 'take_phone.png',
                    'content': '打开电话应用，在拨号盘界面输入号码，如图示界面，再点击①处即可拨打电话。点击 ②处也可拨打电话。 '
                },
                {
                    'name': 'status_bar',
                    'title': '单卡打电话',
                    'src': 'single_take_phone.png',
                    'content': '打开电话应用，在拨号盘界面输入号码，如图示界面，点击①处即可拨打电话。点击 ②处也可拨打电话。 '
                },
                {
                    'name': 'import_contacts',
                    'title': '导入/导出联系人',
                    'src': 'import_contacts.png',
                    'content': '打开联系人应用，点击菜单键“联系人设置 ”进入如图示界面，点击①处进入导入/导出界面，执行导入/导出联系人操作。'
                },
                {
                    'name': 'send_message',
                    'title': '发短信',
                    'src': 'send_message.png',
                    'content': '打开短信应用，点击界面下方菜单栏上的新建短信图标进入如图界面，在①处输入收件人，②处输入短信内容，点击③即可发送短信。'
                }
            ]
        },
        {
            'title': '多媒体',
            'name': 'mult_media',
            'icon': 'overview.png',
            'items': [
                {
                    'name': 'music',
                    'title': '音乐',
                    'src': 'music.png',
                    'content': '打开音乐应用，本地存储的音乐都会在页面中的“全部歌曲”列表中显示。点击播放按钮 ①即可立即听歌，点击②即可进入歌曲详情页面。点击③一键查看海量在线音乐。'
                },
                {
                    'name': 'video',
                    'title': '视频',
                    'src': 'video.png',
                    'content': '从桌面进入视频之后，即可看到本地存储的视频文件，点击视频即可播放，见①。点击②可以查看或者上传下载云端视频。'
                },
                {
                    'name': 'camera',
                    'title': '相机',
                    'src': 'camera.png',
                    'content': '从桌面进入相机之后看到主界面，①显示当前为拍照片模式，点击①可直接拍照。点击 ②可以切换为录像模式。'
                },
                {
                    'name': 'photo_album',
                    'title': '图库',
                    'src': 'photo_album.png',
                    'content': '进图库可以查看图片，当前①是以时间轴查看，点击④可以按时间快速查找图片，点击图片可以放大查看，再次点击进入图片编辑 。右滑至②可以以文件夹形式查看，并可设置隐藏文件夹。③是云端相册入口。'
                }
            ]
        }
    ],
    fulllist: [
        {
            name: 'home',
            title: '桌面与主屏',
            icon: 'fa-mobile fa-lg',
            items: [
                {
                    name: "lockscreen",
                    title: "个性化锁屏与解锁",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "锁屏方式",
                            img: "lockscreen_setting.png",
                            description: "在安全锁屏方式中，可选择锁屏样式，包括音乐锁屏，热词搜索，主题锁屏，图案解锁，声纹解锁，数字解锁，密码解锁。选择样式后可对其进行详细设置。"
                        },
                        {
                            title: "常规解锁操作",
                            img: "general_lockscreen.png",
                            description: "长按①，出现四向解锁盘。不松手拖动到②处即可进主屏，移动到其他应用图标即可进入相应功能。③和④处显示未接来电与未读短信的数量。滑动解锁，空间锁屏及热词搜索均采用此解锁方式。"
                        },
                        {
                            title: "音乐锁屏",
                            img: "music_unlock.png",
                            description: "当音乐在后台播放时，可进入音乐锁屏状态。默认状态下长按①出现四向解锁盘，不松手拖动到解锁键即可进主屏。点击②和④分别可进行切换上一首，播放/暂停，切换下一首。在锁屏状态下点击home 键和后退键返回到锁屏。"
                        }
                    ]
                },
                {
                    name: "app_apply",
                    title: "桌面的应用与操作",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "常用手势",
                            img: "common_gesture.png",
                            description: "双击：在主屏上双击可锁住屏幕。长按：在主屏空白处长按可进入主屏添加页面。长按桌面图标，激活后可对其进行移动、删除和卸载操作。上滑：在主屏上滑可滑出桌面快捷设置。下滑：在任意屏下滑可滑出状态栏 。捏合：在主屏上两指捏合可进入屏幕管理。"
                        },
                        {
                            title: "主屏应用添加",
                            img: "app_add.png",
                            description: "长按主屏空白处，进入主屏添加应用页面 。左右滑动可以选择屏幕，按住①处应用不松手拖到屏幕处即可添加到该屏。"
                        },
                        {
                            title: "其他资源添加",
                            img: "other_resource_add.png",
                            description: "长按主屏空白处进入主屏资源添加页面，点击①可以添加小工具到主屏，点击②切换选择快捷方式。"
                        },
                        {
                            title: "文件夹",
                            img: "file.png",
                            description: "点击主屏文件夹图标，便可进入文件夹，点击文件夹中空白处即可退出文件夹。点击①处可以修改文件夹名称。长按应用拖到文件夹图标上，即可移入应用，长按应用移到文件夹空白处，即可从文件夹中移出应用。当您把一个应用移到另外应用上时，两应用叠加在一起自动建立文件夹。"
                        },
                        {
                            title: "应用的删除与卸载",
                            img: "app_delete.png",
                            description: "在主屏上，长按某个应用，待屏幕顶部出现删除标志，将应用拖进删除标志，该应用就被移出了桌面；在二级菜单中，长按应用进入主屏，屏幕顶部出现卸载标志，将应用拖进卸载标志，该应用即被卸载。"},
                        {
                            title: "应用其他操作",
                            img: "app_operate.png",
                            description: "进入二级菜单，点击手机菜单键，弹出隐藏菜单，通过菜单您可以进行应用排序，可以按照时间，字母，频率排序，也可以自定义排序。点击①可冻结不常用的应用，彻底杜绝后台与自启动。点击②隐藏不常用的应用，避免屏幕过满的烦恼。"
                        },
                        {
                            title: "屏幕编辑",
                            img: "screen_edit.png",
                            description: "在屏幕区滑至最右面，点击添加按钮可添加屏幕。点击①删除屏幕，点击②设置当前屏为默认屏。在主屏上滑调出隐藏菜单，点击管理屏幕，长按屏幕移动可调换屏幕位置。"
                        },
                        {
                            title: "桌面快捷设置",
                            img: "desk_quickset.png",
                            description: "从主屏页面上滑，或者点击菜单键进入桌面快捷设置，如图界面，你可以进行相应的操作。其中点击①可进入主屏添加页面。点击②可以管理屏幕，你可对屏幕进行添加，删除，移位等操作。"
                        }
                    ]
                },
                {
                    name: "widget",
                    title: "常用widget",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "天气",
                            img: "weather_widget.png",
                            description: "在天气widget中，点击①可进入城市定位页面，点击定位图标可自动定位所在城市。点击刷新按钮③可刷新天气信息，点击②进入详细天气，再次点击返回。如果桌面没有，可以在桌面空白处长按添加widget，需要删除时可以长按拖进顶部的删除图标删除即可。"
                        },
                        {
                            title: "拍照",
                            img: "photo_widget.png",
                            description: "在桌面长按添加拍照widget，点击①可以打开取景框拍照，点击图片可以放大查看，并进行删除或分享等操作。长按拍照widget边框可以在桌面删除拍照widget。"
                        },
                        {
                            title: "其它",
                            img: "other_widget.png",
                            description: "长按主屏空白处进入屏幕编辑模式，然后点击①可以添加其它小工具。如你想添加音乐小工具，只需按住图标②并拖动到桌面即可完成添加。"
                        }
                    ]
                },
                {
                    name: "status_bar",
                    title: "状态栏",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "状态栏快捷开关",
                            img: "shortcut_switch.png",
                            description: "在任何页面从顶部下滑即可拉出状态栏，点击①扫二维码，条形码。点击②即可拖动圆钮调节亮度。点击③即可对状态栏快捷开关进行排序。"
                        },
                        {
                            title: "状态栏通知",
                            img: "status_bar_notice.png",
                            description: "在状态栏通知中，点击通知即可触发通知的相应操作。左右滑动通知即可删除该通知 ，如要批量删除通知，点击②可以全部删除。你还可以设置通知过滤，在全部设置＞安全，点选通知即可过滤通知。"
                        },
                        {
                            title: "状态栏设置",
                            img: "status_bar_setting.png",
                            description: "在状态栏中，点击①可以进入全部设置，在设置页面里点击“显示”可以修改状态栏透明度和电量的显示样式。点击“安全”可勾选状态栏禁用，也可在锁屏下禁止状态栏下拉。"
                        }
                    ]
                },
                {
                    name: "louver",
                    title: "易悦读",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "易悦读基本操作",
                            img: "louver.png",
                            description: "易悦读可帮您轻便快捷访问新闻资讯，您可在主屏向上滑调出桌面设置＞易悦读，开启或关闭易悦读。按住易悦读页面上下滑动出现设置面板，点①可切换图文模式，文本模式和智能模式。点②可以添加自己的兴趣 。③处可以查看自己的收藏。"
                        },
                        {
                            title: "添加兴趣",
                            img: "louver_interest_add.png",
                            description: "在易悦读设置面板，点击添加兴趣，弹出兴趣类别，点击①时，图标显示为蓝色时，表示添加，再次点击图标显示为灰色时，表示消除。"
                        },
                        {
                            title: "我的收藏",
                            img: "louver_collect.png",
                            description: "在易悦读设置面板，点击我的收藏，即可进入收藏页面。长按新闻条，会弹出删除按钮①，点击即可删除收藏。"
                        }
                    ]
                },
                {
                    name: "recent",
                    title: "最近使用",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "最近使用",
                            img: "recent.png",
                            description: "长按home键可唤起最近使用页面，点击①可切换到对应应用，长按①可查看对应应用详情。在最近使用页面，你可以下滑应用锁定应用，上滑清理该应用的占用内存。在其他应用页面中，调出最近使用页面，点击其他应用，可切换到相应应用页面中。"
                        }
                    ]
                }
            ]
        },
        {
            name: 'personal_setting',
            title: '个性化设置',
            icon: 'fa-puzzle-piece',
            items: [
                {
                    name: "theme",
                    title: "主题",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "基本介绍",
                            img: "theme_introduce.png",
                            description: "主题可让你的手机更加个性化，你可以点击 ①进入主题，也可以在主屏向上滑调出桌面菜单，点选主题美化进入主题。在主题中，你可以设置壁纸，图标，锁屏，字体，桌面，状态栏，系统控件等元素。"
                        },
                        {
                            title: "在线主题",
                            img: "over_theme.png",
                            description: "在此页面，点击①你可以下载喜欢的主题 。点击②来查看此主题的详情页，在详情页中你可以左右滑动查看，点击下载。点击按钮③，可按时间和下载量进行主题排序，也可勾选仅WLAN时下载，节省流量。"
                        },
                        {
                            title: "本地主题",
                            img: "local_theme.png",
                            description: "在主题页面设置中，本地主题是你已下载的主题，点①可以更换全局主题。点②可进入主题详情页。"
                        },
                        {
                            title: "更换主题",
                            img: "change_theme.png",
                            description: "进入主题详情页面，你可以点①可以删除此主题。点②更换全局主题。点③有更多的功能，你可将DIY主题上传到主题库中，也可点击可选项，进行单项设置。"
                        },
                        {
                            title: "主题设置",
                            img: "theme_setting.png",
                            description: "在主题设置中，你可以点击①自定义主题 ，将以下元素进行混搭，也可进行单项设置包括壁纸，图标，锁屏，锁屏壁纸，字体，桌面，状态栏，通讯模块，系统控件。"
                        }
                    ]
                },
                {
                    name: "wallpaper",
                    title: "壁纸",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "壁纸",
                            img: "wallpaper.png",
                            description: "点击主题图标，进入主题自定义壁纸，在壁纸页面中，点选本地可以选择更多来源 ，在更多来源中选择更多途径来更换壁线。另外在主屏页上滑调出隐藏菜单，点选更换壁纸，也可选择更多途径更换壁纸。你也可进入全部设置>显示>壁纸来更换壁纸。主屏上滑调出隐藏菜单，点选桌面设置，勾选壁纸滑动，可设定壁纸跟随屏幕同时滑动。"
                        }
                    ]
                },
                {
                    name: "personal_center",
                    title: "个人中心",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "个人中心",
                            img: "personal_center.png",
                            description: "个人中心应用，支持使用第三方帐号登陆，尽享云端服务。"
                        }
                    ]
                },
                {
                    name: "font",
                    title: "字体",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "字体",
                            img: "font_setting.png",
                            description: "在全部设置显示中，你可以点击字体大小进行设置。"
                        }
                    ]
                },
                {
                    name: "ring",
                    title: "个性化铃音",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "个性化铃音",
                            img: "ring_setting.png",
                            description: "在全部设置声音中，你可以调节音量，设置来电铃音，默认通知等操作。"
                        }
                    ]
                },
                {
                    name: "start",
                    title: "开机动画",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "开机动画",
                            img: "start_animation.png",
                            description: "点击开机动画图标启动该应用，在制作动画列表中点击视频，出现编辑选项，你可以在此点击①直接制作，根据提示逐步完成开机动画的制作。"
                        }
                    ]
                }
            ]
        },
        {
            name: 'message',
            title: '通信功能',
            icon: 'fa-comment-o',
            items: [
                {
                    name: "call",
                    title: "电话",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "来电界面",
                            img: "have-call.png",
                            description: "如图所示②处可以显示如下信恿：联系人名称/号码，号码归属地信息，号码标注信息（当该号码被本地或云端标记后即会显示）。此外如图所示按住电话按钮下滑到 ①处即可实现短信拒接操作。"
                        },
                        {
                            title: "拨号盘",
                            img: "dial_pad.png",
                            description: "打开电话应用，可以看到拨号盘界面。在拨号盘界面除可拨打电话外，还可快速查找联系人或黄页信息。具体操作方式如图所示，在拨号盘①处输入数字?7”，在通话记录列表界面会显示匹配的联系人和黄页信息。"
                        },
                        {
                            title: "通话界面",
                            img: "call_screen.png",
                            description: "如图所示在通话界面点击①处后将跳转到拨号盘界面，你可以拨打另一通电话，也可以点击联系人添加通话，拨通后再在通话界面点击更多>合并通话，即可实现三方通话。"
                        },
                        {
                            title: "通话记录查看",
                            img: "call_record.png",
                            description: "如图所示通话记录界面①处为通话记录过滤区域，可以按照不同SIM卡进行过滤。点击②处可进入联系人详情界面。长按②处可进行更多操作。单击③处即可拨打电话，长按③处可切换卡进行呼叫。"
                        },
                        {
                            title: "通话记录操作",
                            img: "call_record_operate.png",
                            description: "通话记录界面点击①处菜单键可切换通话记录的显示方式，批量删除通话记录，进行快速拨号设置等操作。"
                        },
                        {
                            title: "标记陌生号码",
                            img: "mark_stranger_call.png",
                            description: "接听陌生号码电话挂断后会显示如图的界面。点击①处可添加号码为联系人，②处为取消标记操作，点击③处即标记该号码为对应类型骚扰电话。④处表示是否标识号码的同时将该号码添加为黑名单。"
                        },
                        {
                            title: "智能IP拨号",
                            img: "IP_call.png",
                            description: "通话记录界面点击菜单项里的通话设置>卡通话设置，即可进入如图界面，点击①处即可设置IP拨号。"
                        }
                    ]
                },
                {
                    name: "sms",
                    title: "短信",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "新建短信",
                            img: "new_message.png",
                            description: "如图新建短信界面②处显示的为最近联系人 ，单击即为添加操作且支持添加多个，长按可实现删除操作。点击①处可添加收件人 。点击③处可伸缩附件面板，附件面板中包含所有新建短信可添加的附件类型。"
                        },
                        {
                            title: "短信列表管理",
                            img: "message_manage.png",
                            description: "如图所示的短信列表界面点击①处可进入短信搜索界面。点击图中②处显示如下的操作 ：a.查询号码归属地；b. 置顶会话；c.添加到黑名单；d.举报短信。"
                        },
                        {
                            title: "短信会话管理",
                            img: "message_talk_manage.png",
                            description: "短信会话界面长按单条会话记录显示如图界面，点击图中①处即可收藏该条短信彩信 。点击图中②处即可保存彩信附件。点击图中③处会跳转到短信编辑界面，实现转发功能。"
                        },
                        {
                            title: "短信通知",
                            img: "message_notice.png",
                            description: "短信主界面点击菜单键>短信设置即可进入如图界面，在①处为通知项总开关，你可以选择②处进行新短信点亮屏幕设置，选择①处为进行新短信重复提醒设置。"
                        },
                        {
                            title: "收藏夹",
                            img: "message_collect.png",
                            description: "短信主界面点击菜单键中的收藏夹项即可进入如图界面，单击①处即可进入该收藏短信所在会话界面，长按①处弹出菜单项中包含如下操作：a.转发；b.取消收藏。"
                        },
                        {
                            title: "短信设置",
                            img: "message_setting.png",
                            description: "点击短信设置>其他设置即可进入如图界面 。其中①为字符计数开关。②为管理SIM卡短信。③为短信中心。④为彩信发送报告开关。彩信自动下载开关（包括漫游时下载开关）。此外在短信设置主界面包含短信发送报告开关。"
                        }
                    ]
                },
                {
                    name: "contacts",
                    title: "联系人",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "常用功能",
                            img: "contacts.png",
                            description: "如图①处滑动界面右侧的字母索引条即可实现快速查找联系人的功能。图②处点击单个联系人将进入该联系人的详情界面，可以查看到该联系人头像，号码和号码归属地，公司和职位信息等。此外在联系人列表长按单个联系人和在联系人详情界面，都可以执行收藏操作。"
                        },
                        {
                            title: "编辑联系人操作",
                            img: "contacts_edit.png",
                            description: "如图点击②处可进入联系人编辑界面，可设置联系人头像。点击①处可执行收藏/取消收藏操作。点击③处弹出更多菜单项设置。"
                        },
                        {
                            title: "查看联系人通话记录和短信记录",
                            img: "contacts_record.png",
                            description: "如图在联系人详情界面的①处向左横滑可以查看该联系人的通话记录，点击①处同时可以拨打电话。向右横滑可以查看该联系人的短信记录 ，同时可以发送短信。"
                        },
                        {
                            title: "群组",
                            img: "contacts_group.png",
                            description: "如图点击①处将进入到群组详情界面，可以查看已有的群组信息，也可以②执行新建群组操作。"
                        },
                        {
                            title: "联系人设置",
                            img: "contacts_setting.png",
                            description: "联系人主界面点击菜单键显示如图界面，点击①处后进入设置界面可进行更多联系人项设置。"
                        }
                    ]
                },
                {
                    name: "doublesim",
                    title: "双卡管理",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "未设置默认卡效果",
                            img: "unset_doublesim.png",
                            description: "未设置默认卡的情况下，拨号盘界面①处会显示双卡拨号按钮，此外短信会话界面会显示双卡发送按钮。"
                        },
                        {
                            title: "设置默认卡效果",
                            img: "set_doublesim.png",
                            description: "设置默认卡情况下，如图所示界面长按①和②均可进行切换卡操作。短信会话界面切换卡发送，同样执行长按操作即可。"
                        },
                        {
                            title: "设置",
                            img: "doublesim_setting.png",
                            description: "进入系统设置>双卡管理可进入如图界面，①为编辑卡名称。②为设置电话和短信默认卡。③为设置数据网络使用哪张卡。"
                        }
                    ]
                },
                {
                    name: "recommend",
                    title: "重点推荐",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "电话",
                            img: "phone.png",
                            description: "拨号盘界面点击菜单键可进入如图所示界面，在①处你可进行通话的更多设置。"
                        },
                        {
                            title: "短信",
                            img: "message.png",
                            description: "如图新建短信界面点击①处可设定短信为定时短信。点击②处可短信分享位置信息。短信通知支持如下两种特性方式：a.语音播报新短信；b.新短信弹窗提醒。这些特性都可以在短信设置界面进行设置。"
                        },
                        {
                            title: "联系人三笔定位",
                            img: "contacts_sanbidingwei.png",
                            description: "在联系人主界面，点击界面上方的搜索框即可进入如图所示的界面，点击键盘图标，变为ABC即切换到三笔定位模式，用户只需输入所需查找联系人的拼音首字母，如①处所示，即可快速查找到结果。"
                        }
                    ]
                }
            ]
        },
        {
            name: 'photo',
            title: '拍摄与浏览',
            icon: 'fa-camera',
            items: [
                {
                    name: "feature_camera",
                    title: "特色相机",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "拍照页面",
                            img: "photo_page.png",
                            description: "从桌面进入相机之后看到主界面，①显示当前为拍照模式，点击①可以直接拍照，点击②可以切换为录像模式。如果硬件支持可以切换前后镜头，点击③可以打开或关闭闪光灯，安卓4.2以上版本的手机支持模板相机。点击④可以选择全集景、倒计时和更多设置。"
                        },
                        {
                            title: "从其他入口",
                            img: "another_start.png",
                            description: "从短信或者微信进拍照页面时，在信息文字输入页面点击添加，选择拍照按钮，即可进入此页面。点击②立即进行拍照，点击①返回之前页面。"
                        }
                    ]
                },
                {
                    name: "photo_file",
                    title: "图库",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "浏览方式",
                            img: "view.png",
                            description: "当前②是按文件夹浏览，长按文件夹④可以选择更多操作。⑤可以查看更多相册。左右滑至①和③ ，分别进入时间轴浏览和云相册，其中在页面①点击时间可以快速定位。"
                        },
                        {
                            title: "图片编辑",
                            img: "photo_edit.png",
                            description: "在图库点击图片放大，再次点击后选择编辑 ，即可进入此界面。底部按钮可以选择不同效果编辑图片，点击①或②可以切换之前或之后的编辑效果。点击③保存至指定相册，保存后再次点击可以分享。"
                        }
                    ]
                }
            ]
        },
        {
            name: 'fun',
            title: '影音播放',
            icon: 'fa-film',
            items: [
                {
                    name: "listen_music",
                    title: "听歌",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "本地听歌",
                            img: "local_music.png",
                            description: "首次点开歌单会自动添加手机里的所有音乐，如果有新的歌曲，只需点开①，选择右上角按钮里的刷新歌曲即可添加。点击②可以直接听歌。③可以添加新列表。点击④一键跳转至在线音乐，海量音乐随意听。"
                        },
                        {
                            title: "不同风格",
                            img: "music_style.png",
                            description: "在线歌曲界面有不同歌曲风格供你选择。点击喜欢的区域可以进入二级目录，每个区域右下角播放按钮③可以直接听歌。点击①返回本地听歌。②支持在线搜索。点击④进入最热推荐。"
                        },
                        {
                            title: "最热推荐",
                            img: "hot_recommend.png",
                            description: "在连网情况下，进入最热推荐，曲库描述部分可以点击①展开更多。点击②全部播放歌曲列表。点击③可以下载，点④展开折叠的选项后通过可以点⑤实现分享功能。"
                        },
                        {
                            title: "更多听歌",
                            img: "more_listen.png",
                            description: "听歌过程中，界面下方会随机出现音乐小著，见①，点击可以查看更多相关歌曲。歌词部分向上拉动可以查看全部歌词及调整播放进度，见②。点击③可以查看列表中的更多歌曲。点击④可以连接DLNA或者设置更多，如边试听边下载、同步歌词等。"
                        },
                        {
                            title: "其他听歌方式",
                            img: "another_listen.png",
                            description: "除了普通的听歌界面，你还可以在听歌过程中通过桌面下拉状态栏控制音乐的播放，图①所示处。除此之外还可以用耳机控制音乐播放，以及通过桌面音乐锁屏来控制音乐播放。"
                        }
                    ]
                },
                {
                    name: "music_edit",
                    title: "音乐编辑与设置",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "歌曲编辑",
                            img: "song_edit.png",
                            description: "进入歌单后点击①，你可以进行收藏、分类、删除、设为铃声、查看歌曲信息、矫正乱码等操作。遇到喜欢的歌，你还可以点击 ②截取其中任何片段，作为铃声或者任意用途。"
                        },
                        {
                            title: "歌曲排序",
                            img: "song_rank.png",
                            description: "在歌单界面点击①可以对歌单进行排序，你可以选择按照歌曲名、歌手名、专辑名、添加时间，以及文件目录的不同来对歌曲排序。点击②可以在不返回上级页面的情况下 ，直接切换不同歌单。"
                        },
                        {
                            title: "列表更新",
                            img: "list_refresh.png",
                            description: "在歌单界面点击①出现歌曲列表，可以进行刷新列表等相关操作。在②处更换列表时，①处的选项会发生变化，比如在最近播放列表可清除播放记录。点击③可以出现更多设置。"
                        },
                        {
                            title: "列表操作",
                            img: "list_operate.png",
                            description: "点击②可以添加新的播放列表，在新的列表中您可以命名并添加歌曲，长按列表①，你可以方便的删除列表或者对列表重命名。"
                        },
                        {
                            title: "音乐设置",
                            img: "song_setting.png",
                            description: "在歌单页面点击①可以对歌单进行操作，当手机里有了新歌，需要刷新本地歌曲以导入新歌。如果想尝试不同音效，只需点开音效页面进行选择，你可以连接DLNA设备或进行更多设置。如果你在睡前开启睡眠定时功能，音乐将会定时退出。"
                        }
                    ]
                },
                {
                    name: "video",
                    title: "视频播放",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "特色功能",
                            img: "feature_function.png",
                            description: "点开视频应用，在本地列表的小缩略图标中，带有播放按钮表示上次看过的视频，蓝色的进度条表示上次看到的进度历史，见①。在②中，你可以直接将视频数据同步到云端。点击③可以根据不同条件进行排序，便于查找。点击④可以出现列表，可以选择需要的功能，比如连接视频DLNA，连接步骤同音乐DLNA。"
                        },
                        {
                            title: "看视频",
                            img: "watch_video.png",
                            description: "在视频播放界面，①可以更改视频播放比例的大小。②可以将视频界面上锁，防止误触 。③可以控制播放或暂停。④和⑤分别切换上一个或下一个视频。⑥显示的是播放进度 ，你可以通过手触来改变播放进度。"
                        },
                        {
                            title: "列表编辑",
                            img: "list_edit.png",
                            description: "列表界面底部可以点击①进行刷新列表， 在②处可以对列表按照弹窗选择重新排序 。点击③可以采取更多操作，如搜索、删除，缩略图查看与列表视图查看的切换，或者进行更多设置。"
                        },
                        {
                            title: "在线视频",
                            img: "online_video.png",
                            description: "点击①可以观看在线视频，在线视频整合了爱奇艺客户端的视频资源，更多海量在线视频，任你欣赏。"
                        }
                    ]
                },
                {
                    name: "video_edit",
                    title: "视频编辑与设置",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "视频设置",
                            img: "video_setting.png",
                            description: "点击手机下方的菜单键，出现如图所示界面，你可以按需要对视频进行相关操作。点击①可以连接DLNA设备。"
                        },
                        {
                            title: "视频详情",
                            img: "video_detail.png",
                            description: "在视频列表页，长按某个视频出现如图所示弹窗，可根据需求选择将该视频重命名、删除、修改封面、分享、上传至云端，或者点 ①查看视频具体详情。"
                        }
                    ]
                },
                {
                    name: "dlna",
                    title: "DLNA设置",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "音乐DLNA",
                            img: "music_DLNA.png",
                            description: "在音乐界面，点击手机下方菜单键②出现菜单，选择①连接DLNA即可。但此功能需要在同一个网络下，有其他开启的支持DLNA 的设备时，才可连接成功并在设备上播放。"
                        },
                        {
                            title: "视频DLNA",
                            img: "video_DLNA.png",
                            description: "在视频播放界面，点击手机下方菜单键②出现菜单，选择连接DLNA即可。但此功能需要在同一个网络下，有其他开启的支持 DLNA的设备时，才可连接成功并在设备上播放。此外，在视频播放页面也可以点击图标①连接DLNA。"
                        }
                    ]
                }
            ]
        },
        {
            name: 'security',
            title: '安全中心',
            icon: 'fa-shield ',
            items: [
                {
                    name: 'securitycenter',
                    title: '安全中心',
                    icon: 'overview.png',
                    pages: [
                        {
                            title: "主界面",
                            img: "security_mainscreen.png",
                            description: "桌面上点击安全中心图标进入如图界面，点击①可进行手机一键体验，②处为所有安全中心功能列表，可左右滑动查看。点击②处中的每个图标可进入功能详情界面。"
                        },
                        {
                            title: "手机加速",
                            img: "speed_phone.png",
                            description: "安全中心主界面点击手机加速项进入如图界面，用户可选择一键加速，也可以点击①执行深度加速操作。"
                        },
                        {
                            title: "流量助手",
                            img: "flow_assistant.png",
                            description: "安全中心主界面点击流量助手项进入如图界面，点击①可进入流量助手设置界面，可以执行流量套餐和校准设置，也可设置超额提醒。点击②执行流量校准。点击③进入流量排行界面，可设置应用联网控制。点击④进入流量节省界面，可设置节省开关和强度。"
                        },
                        {
                            title: "骚扰拦截",
                            img: "harass_intercept.png",
                            description: "在安全中心主界面点击骚扰拦截项进入如图界面，点击①查看已拦截短信。点击②查看电话拦截记录。点击③查看黑名单列表。点击④可进行骚扰拦截设置，包含设置拦截模式，拦截回复音，白名单列表等。此外在备份与恢复应用中可以对骚扰拦截数据进行备份与恢复。"
                        },
                        {
                            title: "手机找回",
                            img: "find_phone.png",
                            description: "当用户已登录百度帐号，进入安全中心主界面，点击手机找回项显示如图界面，点击①处即可绑定帐号，绑定成功后①处会更新为解除绑定。点击②处可绑定其他账号。点击③将打开浏览器登录网址：http://zhaohui.baidu.com。"
                        },
                        {
                            title: "应用锁",
                            img: "lock_app.png",
                            description: "在安全中心主界面点击应用锁显示如图界面，①处为应用锁功能的总体开关，②处为某个具体应用的应用锁开关。"
                        }
                    ]
                }
            ]
        },
        {
            name: 'features',
            title: '特色功能',
            icon: 'fa-cubes',
            items: [
                {
                    name: "feature",
                    title: "特色功能",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "电池管理",
                            img: "battery_manage.png",
                            description: "打开快捷设置＞电池管理，在①处你可查看剩余电量，可用时间，打开应急节电。在 ②处可以查看各个程序的耗电情况。"
                        },
                        {
                            title: "点滴搜索",
                            img: "drop_search.png",
                            description: "拖动点滴图标①到搜索的内容，再次点击即可完成搜索。长按图标②可以选句搜索，复制，分享和保存。如要退出，可以直接点击 ；也可以在状态栏的工具菜单中关闭点滴搜索。本功能仅在512M以上机型使用。"
                        },
                        {
                            title: "文件管理",
                            img: "file_manage.png",
                            description: "进入文件管理，你可在①处可查看手机存储和百度网盘内的文件。点击②可新建文件夹 ，分类浏览和调整文件排序。点③处选中文件夹可进行各种操作。通过百度网盘，可以把文件存在云端哦。"
                        },
                        {
                            title: "SD卡文件管琿",
                            img: "file_sd.png",
                            description: "进入文件管理，你可点击①处可查看SD卡存储文件。点击②可以对文件进行排序。通过③来分类浏览文件。点击④进行更多文件设置。"
                        },
                        {
                            title: "阅读",
                            img: "ireader.png",
                            description: "多酷阅读，为您提供绿色，正版，安全的海量图书资源，让您路上有伴，电子书店随身带"
                        },
                        {
                            title: "面对面分享",
                            img: "share.png",
                            description: "面对面分享是一个支持手机近距离数据分享的功能，他利用WiFi传输，界面丰富，体验舒适，比蓝牙快得多！从桌面进入，可以按需求选择分享或接收。选择后进入当前页面，更多清楚的内容尽收眼底，手指飞扬，让分享与接收，更加从容自在。"
                        },
                        {
                            title: "OTG功能",
                            img: "otg.png",
                            description: "如果手机支持OTG功能，你可以通过OTG数据线连接U盘、读卡器、以及USB接口的鼠标和键盘。文件管理器、音乐播放器、图库和视频播放器等都支持直接访问OTG连接的存储设备。如果手机支持OTG功能，你可以通过OTG数据线连接U盘、读卡器、以及USB接口的鼠标和键盘。文件管理器、音乐播放器、图库和视频播放器等都支持直接访问OTG连接的存储设备。"
                        }
                    ]
                }
            ]
        },
        {
            name: 'tools',
            title: '小工具',
            icon: 'fa-wrench ',
            items: [
                {
                    name: "tool",
                    title: "小工具",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "时钟",
                            img: "time.png",
                            description: "你可以在小工具中找到时钟应用，通过①来查看时钟，设定闹钟，秒表和倒数。你可以从②处可以进行添加时钟，删除和设置时钟操作。如果闹钟处于开启状态。长按关机键可设关机闹钟，再也不用担心因关机而错过闹钟了。"
                        },
                        {
                            title: "闹钟设置",
                            img: "clock.png",
                            description: "进入添加闹钟页面，在①处你可以通过滑动钟表时针来设定闹钟事件，也可以在②处按照工作日和非工作日来设置。尝试给自己的闹钟加个标签，设成自己喜爱的铃声吧。"
                        },
                        {
                            title: "日历",
                            img: "calendar.png",
                            description: "日历实现阴历与阳历的完美结合，清晰醒盘。点击①可按照日，周，月来查看日历及日常活动安排。②处有活动提醒标记。点击③ 进日历菜单，菜单内可进行新建活动 ，搜索，视图和提醒设置等操作。"
                        },
                        {
                            title: "计算器",
                            img: "calculator.png",
                            description: "计算器藏在小工具文件夹里，您可以滑动 ①实现科学计算器与普通计算器的切捿。②可以帮助您在输入错误时点击更改。点击③可清除显示，重新计算。"
                        },
                        {
                            title: "录音机",
                            img: "recorder.png",
                            description: "从小工具打开录音机，点击①可开始或停止录音。录音完毕点击②处分别可以进行播放，保存和删除操作。点击③可以查看录音文件，长按文件可对文件重命名和分享等。"
                        },
                        {
                            title: "收音机",
                            img: "radio.png",
                            description: "滑动①手动调频，想听哪就听哪。喜欢的频道果断收藏，都藏在您的列表里，点击②处可切换下一个调频。点击③查看更多贴心功能。"
                        },
                        {
                            title: "手电筒",
                            img: "flashlight.png",
                            description: "推动①可打开或关闭手电筒。通过②进入百度公益助学平台，传递一份爱。手机解锁的情况下，通过下拉状态栏，可快捷启动手电筒。"
                        },
                        {
                            title: "记事本",
                            img: "notepad.png",
                            description: "打开记事本，在①处可新建笔记。通过②可以标记不同的笔记。向左滑动笔记可删除便签，点击③即可删除便签。点击内容标题即可阅读内容详情。小本大能量哦。"
                        }
                    ]
                }
            ]
        },
        {
            name: 'ota',
            title: '系统更新',
            icon: 'fa-cloud-upload ',
            items: [
                {
                    name: "ota-upload",
                    title: "系统更新",
                    icon: "overview.png",
                    pages: [
                        {
                            title: "系统更新",
                            img: "OTA.png",
                            description: "在全部设置中点击系统更新，进入系统更新页面，在①你可以先选择仅WLAN下载 。点②检查更新，如果检测到更新版本，可以选择系统升级到最新版，同时你也可以下载最新安装包，通过③进行通过新版安装包来安装更新，以完成系统更新。"
                        }
                    ]
                }
            ]
        },
    ],
    faq:
            [
                {
                    "question": "手机常用快捷键是什么？",
                    "answer": "短按home键，回到主屏，并把当前任务转为后台运行；长按home键，调出最近运行的任务；长按电源键，用户可以选择关机、重启、飞行模式，截屏或者静音。长按电源键和音量下可快速截屏。锁屏状态下长按home可打开手电筒。"
                }, 
                {
                    "question": "如何备份手机中的数据？",
                    "answer": "在手机中点击备份与恢复，选择备份至本地或者备份至云端，即可选择需要的应用进行备份。"
                }, 
                {
                    "question": "发现新版本，如何更新？",
                    "answer": "在设置>全部设置里，选择“系统更新”，检测到最新版本后，开始下载并稍后重启手机。"
                }, 
                {
                    "question": "如何收纳菜单中的应用？",
                    "answer": "二级菜单采用隐藏应用,进入二级菜单，点击手机菜单键，弹出隐藏菜单，可以冻结不常用的应用和隐藏不常用的应用；主屏采用创建文件夹,手指长按APP图标，把APP拖动到另外一个你想合并的APP上面，一个文件夹会自动出现。"
                }, {
                    "question": "如何进行通知过滤？",
                    "answer": "长按状态栏单条通知，可进行过滤；安全中心>通知过滤，可以自行选择需要屏蔽的应用通知。"
                }, {
                    "question": "如何在一键清理时锁住某个应用？",
                    "answer": "长按Home键，在一键清理界面，将该应用向下一拉即可上锁，再一上拉就解锁。"
                }, {
                    "question": "手机电池如何保养？",
                    "answer": "只要经过３-５次正常的充放电循环就可激活电池，达到最佳使用效果。由于锂电池本身几乎没有记忆效应，后续用户可以根据自己的使用习惯随用随充，过充和过放都会影响锂电池的正常寿命。"
                }, {
                    "question": "如何把喜欢的歌设定为铃声？",
                    "answer": "在手机里遇到喜欢的歌曲，您可以在歌曲列表中点开歌曲后面折叠的更多选项，选择设为铃声。或者选择裁剪铃声，裁剪喜欢的片段作为手机铃声。"
                }, {
                    "question": "手机不能开机怎么办?",
                    "answer": "手机电池过度放电会导致无法开机，出现不能开机的情况，请先检查电量或者给手机充电 ，需要充一段时间，等电池电量恢复后才能开机。若您确认电池电量充足仍无法正常启动手机，可长按电源键 + 音量上键进入recovery模式，选择清除数据和恢复出厂设置，不过这样用户数据会丢失，建议常常做备份。"
                }, {
                    "question": "蓝牙连不上怎么办？",
                    "answer": "首先确认双方蓝牙设备都处于打开并且处于可检测状态；将需要连接的蓝牙设备重新激活，待该设备进入搜索模式，重新手动查找即可。"
                }, {
                    "question": "为什么连不上DLNA？",
                    "answer": "使用DLNA功能需要和手机互通的设备本身也支持DLNA功能，要保持设备正常开启并和手机处于同一个网络环境下。"
                }
            ]
};