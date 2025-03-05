export const ErrorConstant = {
    default: 'Something went wrong',
}

export const LoginState = {
    init: 'init',
    processing: 'processing',
    error: 'error',
    success: 'success',
}

export const CommonConstant = {
    defaultPageSize: 10,
    mode: process.env.REACT_APP_MODE,
    maxBonus: 10 ** 18,
    totemChart: 'https://coinmarketcap.com/currencies/totem-new-earth-systems/',
    nullTx: '0x0000000000000000000000000000000000000000000000000000000000000000',
    nullAddress: '0x0000000000000000000000000000000000000000',
    nativeAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    error: 'Something went wrong',
}

export const PaginationType = {
    All: 'All',
    Default: 'Default',
}

export const CompetitionTabScreen = {
    Common: 'common',
    Rounds: 'rounds',
}

export const SettingsTabScreen = {
    General: 'general',
    UserManagement: 'user-management',
    Competition: 'Competition',
    ContentModeration: 'content-moderation',
    AnalyticsLogs: 'analytics-logs',
}

export const VideosTabScreen = {
    All: 'all',
    Reported: 'reported',
    Approved: 'approved',
    Disapproved: 'disapproved',
    Blocked: 'blocked',
}

export const StorageConstant = {
    token: 'token',
    user: 'user',
    IsAuthenticated: 'IsAuthenticated',
    firstName: 'firstName',
}

export const DefaultChartKeyFields = {
    unAnswered: 'UnAnswered',
}
export const StatusType = {
    Completed: 5,
    Save: 2,
}

export const AccessOptions = [
    { Id: 'Public', name: 'Make it Public Template' },
    { Id: 'Private', name: 'Make it Private Template' },
    { Id: 'Internal', name: 'Make it Internal Template' },
]

export const ThemeRadioIds = {
    Image: 1,
    Text: 2,
}

export const ThemeRadioOptions = [
    { Id: ThemeRadioIds.Image, name: 'Image' },
    { Id: ThemeRadioIds.Text, name: 'Text' },
]

export const TaskGroupSectionsByDates = {
    Today: { key: 'today', title: 'Today' },
    Tomorrow: { key: 'tomorrow', title: 'Tomorrow' },
    ThisWeek: { key: 'thisWeek', title: 'This Week' },
    Later: { key: 'later', title: 'Later' },
}

export const TaskGroupSectionsByStatus = {
    InProgress: 'In Progress',
    Overdue: 'Overdue',
}
export const UserSteps = {
    Invite: 2,
}
export const InviteType = {
    Email: 1,
    Phone: 2,
}

export const CommanReportComponentType = {
    CompanyLogo: 1,
    AboutUs: 2,
    CompanyHeader: 3,
    ReportCustomerDetail: 4,
    ReportLocationDetail: 5,
    ChartResult: 6,
    SectionResult: 7,
    TextAreaWithEditor: 8,
    TextboxWithBulletPoint: 9,
    ImagePickup: 10,
    TableSummary: 11,
    TextBoxWithHeader: 12,
}

export const RegExesList = {
    Email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|in)$/,
}

export const ChartRadioStatus = {
    None: 0,
    Pie: 1,
    Bar: 2,
}

export const AcceptFileType = {
    image: {
        'image/*': ['.jpeg', '.png', '.jpg', '.gif'],
    },
    video: {
        'video/*': [
            '.mp4',
            '.webm',
            '.wav',
            '.mp3',
            '.ogg',
            '.glb',
            '.gltf',
            '.mov',
        ],
    },
    imageVideo: {
        'image/*': [
            '.jpeg',
            '.png',
            '.jpg',
            '.gif',
            '.mp4',
            '.webm',
            '.wav',
            '.mov',
            '.mp3',
            '.ogg',
            '.glb',
            '.gltf',
        ],
    },
    document: {
        'application/pdf': ['.pdf'],
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
            '.xlsx',
            '.csv',
        ],
    },
    xlsx: {
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
            '.xlsx',
        ],
    },
    all: {
        'application/pdf': ['.pdf'],
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
            '.xlsx',
            '.csv',
        ],
        'image/*': [
            '.jpeg',
            '.png',
            '.jpg',
            '.gif',
            '.mp4',
            '.webm',
            '.wav',
            '.mov',
            '.mp3',
            '.ogg',
            '.glb',
            '.gltf',
        ],
        'video/*': [
            '.mp4',
            '.webm',
            '.wav',
            '.mp3',
            '.ogg',
            '.glb',
            '.gltf',
            '.mov',
        ],
    },
}

export const DatePickerTypes = {
    Range: 'range',
    Single: 'single',
}

export const SettingsTabs = {
    Company: 'company',
    Report: 'report',
    Theme: 'theme',
}

export const FormErrorText = {
    SpacesNotAllowed: 'Spaces not alllowed',
}
