export interface IShellLaunchInfo {
    icon: string;
    title: string;
    viewModel: string;
    model: Object;
}

export interface IShellInstanceInfo extends IShellLaunchInfo {
    isActive: boolean;
}

export class Shell {
    shellA: Array<IShellInstanceInfo>;
    shellB1: Array<IShellInstanceInfo>;
    shellB2: Array<IShellInstanceInfo>;
}