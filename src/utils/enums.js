import i18n from '../i18n'

export default {
  // 视频类型
  videoType: [
    {code: 101, description: "普通视频"},
    {code: 102, description: "VR视频"}
  ],
  // 机构类型
  orgType: [
    {code: 101, description: "连锁"},
    {code: 102, description: "非连锁"}
  ],
  // 机构状态
  orgStatus: [
    {code: 101, description: "新建"},
    {code: 102, description: "未开始"},
    {code: 103, description: "使用中"},
    {code: 104, description: "已过期"}
  ],
  // 验证码类型
  smsStatus: [
    {code: 100, description: "注册"},
    {code: 101, description: "登录"},
    {code: 102, description: "忘记密码"},
    {code: 103, description: "手机绑定"},
    {code: 104, description: "邮箱绑定"},
    {code: 105, description: "微信绑定"}
  ],
  // 教具分类
  realiaCategory: [
    {
      description: "感官教具",
      code: 100,
      children: [
        {code: 100100, description: "视觉"},
        {code: 100101, description: "触觉"},
        {code: 100102, description: "听觉"},
        {code: 100103, description: "嗅觉"},
        {code: 100104, description: "味觉"},
        {code: 100105, description: "其它"}
      ]
    },
    {
      description: "数学教具",
      code: 101,
      children: [
        {code: 101100, description: "量与数"},
        {code: 101101, description: "十进制"},
        {code: 101102, description: "线性计算"},
        {code: 101103, description: "四则运算"},
        {code: 101104, description: "文化性应用"},
        {code: 101105, description: "其它"}
      ]
    },
    {
      description: "语文教具",
      code: 102,
      children: [
        {code: 102100, description: "听"},
        {code: 102101, description: "说"},
        {code: 102102, description: "写"},
        {code: 102103, description: "读"},
        {code: 102104, description: "文法"},
        {code: 102105, description: "其它"}
      ]
    },
    {
      description: "科教文化教具",
      code: 103,
      children: [
        {code: 103100, description: "历史"},
        {code: 103101, description: "地理"},
        {code: 103102, description: "动物"},
        {code: 103103, description: "植物"},
        {code: 103104, description: "艺术"},
        {code: 103105, description: "音乐与律动"},
        {code: 103106, description: "其它"}
      ]
    },
    {
      description: "日常生活教具",
      code: 104,
      children: [
        {code: 104100, description: "优雅与礼仪"},
        {code: 104101, description: "粗大工作"},
        {code: 104102, description: "精细动作"},
        {code: 104103, description: "照顾环境"},
        {code: 104104, description: "食物预备"},
        {code: 104105, description: "照顾自己"}
      ]
    },
    {
      description: "和平教育",
      code: 105,
      children: [
        {code: 105100, description: "心灵"},
        {code: 105101, description: "心智"},
        {code: 105102, description: "情绪"},
        {code: 105103, description: "身体"},
        {code: 105104, description: "其它"}
      ]
    },
    {description: "美劳教学", code: 106, children: null},
    {description: "音乐教学", code: 107, children: null},
    {description: "衍生教具", code: 108, children: null}
  ],
  // 机构行业
  orgIndustryCategory: [
    {
      code: 100,
      description: "教育",
      children: [
        {code: 100100, description: "幼儿园"},
        {code: 100101, description: "幼儿园(蒙氏)"},
        {code: 100102, description: "幼儿园(蒙氏班)"},
        {code: 100103, description: "早教机构"},
        {code: 100104, description: "培训机构"},
        {code: 100105, description: "小学"},
        {code: 100106, description: "中学"},
        {code: 100107, description: "高中"},
        {code: 100108, description: "其他"}
      ]
    },
    {
      code: 101,
      description: "建筑",
      children: [
        {code: 101100, description: "建筑公司"},
        {code: 101101, description: "装潢公司"}
      ]
    },
    {
      code: 102,
      description: "体育",
      children: [
        {code: 102100, description: "体育培训"}
      ]
    },
    {
      code: 103,
      description: "医疗",
      children: [
        {code: 103100, description: "医院诊所"},
        {code: 103101, description: "医疗看护"}
      ]
    },
    {
      code: 104,
      description: "娱乐",
      children: [
        {code: 104100, description: "影视娱乐"},
        {code: 104101, description: "健身中心"},
        {code: 104102, description: "游乐园"}]
    },
    {
      code: 105,
      description: "服务",
      children: [
        {code: 105100, description: "家政公司"},
        {code: 105101, description: "物业管理公司"},
        {code: 105102, description: "美容中心"},
        {code: 105103, description: "摄影机构"},
        {code: 105104, description: "律师机构"},
        {code: 105105, description: "会计机构"}
      ]
    },
    {
      code: 106,
      description: "餐旅业",
      children: [
        {code: 106100, description: "旅游公司"},
        {code: 106101, description: "酒店"},
        {code: 106102, description: "餐饮公司"}
      ]
    },
    {
      code: 107,
      description: "制造业",
      children: [
        {code: 107100, description: "服装纺织公司"},
        {code: 107101, description: "汽车公司"},
        {code: 107102, description: "化工原料厂"},
        {code: 107103, description: "家具公司"},
        {code: 107104, description: "手工艺公司"}
      ]
    },
    {
      code: 108,
      description: "公益",
      children: [
        {code: 108100, description: "其他"},
        {code: 108101, description: "儿童早期发展"}
      ]
    }
  ],
  // 性别
  userSex: [
    {code: 100, description: '无'},
    {code: 101, description: '男'},
    {code: 102, description: '女'}
  ],
  // 上传状态
  videoUploadStatus: [
    {code: 101, description: "上传中"},
    {code: 102, description: "上传成功"},
    {code: 103, description: "上传失败"}
  ],
  // 教师规模
  orgScale: [
    {code: 101, description: "10人以下"},
    {code: 102, description: "10-30人"},
    {code: 103, description: "30人以上"},
    {code: 104, description: "50人以上"},
    {code: 105, description: "100人以上"}
  ],
  // 处理状态
  dealStatus: [
    {code: 101, description: "待处理"},
    {code: 102, description: "处理成功"},
    {code: 103, description: "处理失败"}
  ],
  // 素材类型
  unstructuredDataType: [
    {code: 101, description: "图片"},
    {code: 102, description: "视频"},
    {code: 103, description: "图文"},
  ],
  // 用户类型
  userType: [
    {code: 100, description: "超级管理员"},
    {code: 101, description: "机构管理员"},
    {code: 102, description: "教师"},
    {code: 103, description: "家长"},
  ],
  // 平台功能
  platformFunc: [
    {code: 100, description: "培训中心"},
    {code: 101, description: "资料中心"},
    {code: 102, description: "家校通CRM"},
    {code: 103, description: "一体化OA系统"},
    {
      code: 104,
      description: "库存系统",
      children: [
        {code: 104100, description: "人工盘库"},
        {code: 104101, description: "自动化盘库"},
      ]
    },
    {
      code: 105,
      description: "教务中心",
      children: [
        {code: 105100, description: "班级管理"},
        {code: 105101, description: "教学计划"},
        {code: 105102, description: "教案中心"},
        {code: 105103, description: "档案管理"},
      ]
    },
    {
      code: 106,
      description: "教学助手(APP、iPad)",
      children: [
        {code: 106100, description: "蒙氏专业版"},
        {code: 106101, description: "普通园所通用版"},
      ]
    },
  ],
  // 示范对象
  mattersOperationObject: [
    {code: 100, description: "个体"},
    {code: 101, description: "小组"},
    {code: 102, description: "团队"}
  ],
  // 适用年龄
  videoApplyAgeType: [
    {code: 100, description: "0-1岁"},
    {code: 101, description: "1-1.5岁"},
    {code: 102, description: "1.5-3岁"},
    {code: 103, description: "3-6岁"},
    {code: 104, description: "0-6岁"}
  ],
  // 课时类型
  lessonType: [
    {code: 100, description: "图文"},
    {code: 101, description: "视频"},
    // {code: 102, description: "直播"},
    // {code: 103, description: "VR直播"},
    // {code: 104, description: "会议"},
    {code: 105, description: "试卷"},
    // {code: 106, description: "VR视频"},
    {code: 107, description: "教具操作"}
  ],
  // 机构端课时类型
  lessonTypeOrg: [
    {code: 100, description: "图文"},
    {code: 101, description: "视频"},
    // {code: 102, description: "直播"},
    // {code: 103, description: "VR直播"},
    // {code: 104, description: "会议"},
    {code: 105, description: "试卷"},
    // {code: 106, description: "VR视频"},
    // {code: 107, description: "教具操作"}
  ],
  // 课程等级
  lessonLevel: [
    {code: 100, description: "低级"},
    {code: 101, description: "中级"},
    {code: 102, description: "高级"}
  ],
  // 课程节点类型
  nodeType: [
    {code: 100, description: "章"},
    {code: 101, description: "课时"},
    {code: 102, description: "节"}
  ],
  // 课程状态
  courseStatus: [
    {code: 100, description: "已发布"},
    {code: 101, description: "未发布"}
  ],
  // 学智课程状态
  xuezhiCourseStatus: [],
  orgExpire: [
    {code: 1, description: "一年"},
    {code: 2, description: "三年"},
    {code: 3, description: "十四天"}
  ],
  lessonContentStatus: [
    {code: 0, description: "未添加"},
    {code: 1, description: "已添加"}
  ],

  orgMemberType: [
    {code: 0, description: "正式会员"},
    {code: 1, description: "试用账号"}
  ],
  questionType: [
    {code: 0, description: "单选"},
    {code: 1, description: "多选"},
    {code: 2, description: "判断"},
    {code: 3, description: "排序"}
  ],
  orgFatherOrSon: [
    {code: 0, description: "主机构"},
    {code: 1, description: "子机构"}
  ],
  // 视频学习设置
  videoStudyStatus: [
    {code: 0, description: "无需完整播放#指进入视频课时学习状态即为通过"},
    {code: 1, description: "需要完整播放#指进入视频课时，视频完整播放后学习状态才能通过"}
  ],
  // 学习顺序设置
  studyOrderStatus: [
    {code: 0, description: "顺序学习#指必须通过上一课时的学习才能点击进入下一课时"},
    {code: 1, description: "选择学习#所有课程课时都可以点击进入学习"}
  ],
  productionTeamType: [
    {code: 0, description: "Iris团队"},
    {code: 1, description: "吴老师团队"},
    {code: 2, description: "戈老师团队"},
    {code: 3, description: "学智"}
  ],
  toolBoxType: [
    {code: 0, description: '3排3列', format: [3,3]},
    {code: 1, description: '3排4列', format: [3,4]},
    {code: 2, description: '4排3列', format: [4,3]}
  ],
  // 库存类型
  stockType: [
    {code: 100, description: '自动化'},
    {code: 101, description: '人工'}
  ],
  // 物品类型
  goodsType: [
    {code: 100, description: '标准教具'},
    {code: 101, description: '自定义'},
    {code: 102, description: '其他'}
  ],
  // 家庭关系
  relationShip: [
    {code: 100, description: '爸爸'},
    {code: 101, description: '妈妈'},
    {code: 102, description: '外婆'},
    {code: 103, description: '外公'},
    {code: 104, description: '爷爷'},
    {code: 105, description: '奶奶'},
    {code: 106, description: '其他'}
  ],
  // 职务
  duty: [
    {code: 100, description: '机构管理员'},
    {code: 101, description: '主教'},
    {code: 102, description: '助教'},
    {code: 103, description: '生活老师'},
    {code: 104, description: '园长'},
    {code: 105, description: '班主任'}
  ],
  // 培训状态
  trainStatus: [
    {code: 100, description: '未开始'},
    {code: 101, description: '进行中'},
    {code: 102, description: '已结束'},
    {code: 103, description: '已取消'}
  ],
  // 教室类型
  classRoomType: [
    {code: 100, description: '蒙氏标准教室'},
    {code: 101, description: '蒙氏自定义教室'},
    {code: 102, description: '普通教室'}
  ],
  // 班级类型
  classType: [
    {code: 100, description: '普通班'},
    {code: 101, description: '蒙特梭利-IC班'},
    {code: 102, description: '蒙特梭利-CASI班'}
  ],
  // 位置状态
  locationStatus: [
    {code: 0, description: '异常'},
    {code: 1, description: '正常'}
  ],
  // 绑定状态
  bindingStatus: [
    {code: 0, description: '未绑定'},
    {code: 1, description: '已绑定'}
  ],
  // 教具摆放位置状态
  goodsLocationStatus: [
    {code: 100, description: '感应器不在有效范围内'},
    {code: 101, description: '教具未绑定感应器'},
    {code: 102, description: '感应器在有效范围内'},
    {code: 103, description: '未绑定教具'},
  ],
  // 主联系人
  mainContact: [
    {code: 100, description: '是'},
    {code: 101, description: '否'}
  ]
}

