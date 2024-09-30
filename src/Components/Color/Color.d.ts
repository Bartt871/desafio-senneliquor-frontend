declare module 'Color' {
    type Success = 'success';
    type Warning = 'warning';
    type Danger = 'danger';
    type Info = 'info';
    type Primary = 'primary';
    type PrimaryDark = 'primary--dark';
    type Secondary = 'secondary';
    type SecondaryLight = 'secondary--light';
    type SecondaryDark = 'secondary--dark';
    type Unabled = 'unabled';
    type UnabledDark = 'unabled--dark';

    export type Color = Success | Warning | Danger | Info | Primary | PrimaryDark | Secondary | SecondaryLight | SecondaryDark | Unabled | UnabledDark;
}