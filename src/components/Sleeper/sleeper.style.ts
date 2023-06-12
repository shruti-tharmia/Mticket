import { styled } from '@mui/material/styles';
export const ParentBox = styled('div')(
  ({ theme }: any) => `
flex:1;
display:flex;
justify-content:center;
align-items:center;
gap:${theme.typography.pxToRem(theme.gap.larger)};
height:100vh;
${theme.breakpoints.down('sm')} {
    margin-top:${theme.typography.pxToRem(32)};
    gap:0;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:100vw;
}
${theme.breakpoints.down('md')} {
    flex-direction:column;
}
${theme.breakpoints.down('lg')} {
    flex-direction:column;
}
.upperSeatBox {
    border:thin solid ${theme.palette.background.grey};
}
.busContainer {
    border:thin solid ${theme.palette.background.grey};
    width:min-content;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    overflow-y:scroll;
    

    &::-webkit-scrollbar {
        display:none;
    }
}
.boxContainer {
    padding:${theme.typography.pxToRem(theme['padding']['main'])};
    position:relative;
    display:flex;
    max-height: ${theme.typography.pxToRem(400)};
    overflow-y:scroll;
    width: max-content;
    &::-webkit-scrollbar {
        display: none;
    }
}
.nowrap {
    flex-wrap:nowrap;
    height:min-content;
}
.space {
    padding:${theme.typography.pxToRem(theme['padding']['small'])};
}
.divider {
    margin:${theme.typography.pxToRem(theme['margin']['large'])}
3rem ${theme.typography.pxToRem(theme['margin']['large'])} 0;
}
.container {
    max-width: ${theme.typography.pxToRem(theme['width']['main'])};
    display: flex;
    gap:${theme.typography.pxToRem(theme['gap']['tworem'])};
}
.steeringImage {
    width:${theme.typography.pxToRem(theme['width']['small'])};
    margin-right:${theme.typography.pxToRem(theme['margin']['main'])};
    margin-top:${theme.typography.pxToRem(theme['margin']['primary'])};
}
.mainBox {
    height:${theme.typography.pxToRem(43)};
    width:${theme.typography.pxToRem(32)};
    border:thin solid ${theme.palette.background.grey};
    padding:${theme.typography.pxToRem(theme['padding']['primary'])};
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column-reverse;
    cursor: pointer;
    z-index:1;
    transition: 0.3s ease;
    .id {
        position: absolute;
        bottom:${theme.typography.pxToRem(20)};
        font-size:${theme.typography.pxToRem(10)};
    }
}
.smallBox {
    position: absolute;
    width:${theme.typography.pxToRem(16)};
    border:thin solid ${theme.palette.commonBgColor.darkgrey};
    padding:${theme.typography.pxToRem(3)};
    z-index:-1;
    transition: 0.3s ease;
}
.femaleUnavailable {
    background-color:${theme.palette.background.pink};
    border:thin solid ${theme.palette.background.darkgrey};
    cursor: default;
}
.femaleAvailable {
    border:thin solid ${theme.palette.background.pink};
    background-color:${theme.palette.background.white};
}
.maleAvailable {
    background-color:${theme.palette.background.white};
    border:thin solid ${theme.palette.background.grey};
}
.maleUnavailable {
    background-color:${theme.palette.background.lightblue};
    border:thin solid ${theme.palette.background.darkgrey};
    cursor: default;
}
.available {
    background-color:${theme.palette.background.white};
    border:thin solid ${theme.palette.background.grey};
}
.detailsMain {
    height:${theme.typography.pxToRem(theme['height']['oneRem'])};
    width:${theme.typography.pxToRem(theme['width']['oneRem'])};
    margin-top:${theme.typography.pxToRem(theme['margin']['oneForth'])};
}
.singleLegend {
    display: flex;
    gap:${theme.typography.pxToRem(theme['gap']['primary'])};
    ${theme.breakpoints.down('sm')} {
        gap:${theme.typography.pxToRem(4)};
    }
}
.seatLegend {
    position:absolute;
    top:-15%;
    display: flex;
    justify-content: center;
    gap:${theme.typography.pxToRem(8)};
    padding:0 ${theme.typography.pxToRem(8)} 0 ${theme.typography.pxToRem(8)};
    ${theme.breakpoints.down('sm')} {
        gap:${theme.typography.pxToRem(4)};
        padding:0 ${theme.typography.pxToRem(8)};
        width: max-content;
        top:-8%;
    }
}
.seatDetails {
    ${theme.breakpoints.down('sm')} {
        margin-left:${theme.typography.pxToRem(48)};
        margin-top:${theme.typography.pxToRem(theme['margin']['twoRem'])};
        display: none;
    }
    ${theme.breakpoints.down('md')} {
        flex-direction: column;
        margin-left: 0;
        margin-bottom:${theme.typography.pxToRem(32)};
    }
}
.bookingSummaryButton {
    border-radius: 0;
}
.selected {
    border: thin solid green;
}
.gridMargin {
    margin-top:${theme.typography.pxToRem(theme['margin']['medium'])};
}
.deckInfo {
    position: absolute;
    top: ${theme.typography.pxToRem(theme['top']['medium'])};
    left: ${theme.typography.pxToRem(theme['left']['secondary'])};
    margin: 0;
    color:${theme.palette.background.darkgrey};
}
.seats {
    display: flex;
    gap:${theme.typography.pxToRem(theme.gap.secondary)};
    justify-content:center;
    align-items:center;
    position:relative;
    ${theme.breakpoints.down('sm')} {
        margin-top:5%;
        flex-direction: column;
    }
    ${theme.breakpoints.down('md')} {
        margin-top:10%;
    }
}
.drawer {
    display: none;
    ${theme.breakpoints.down('sm')} {
        display: flex;
    }
}
.styledBox {
    display: none;
    ${theme.breakpoints.down('sm')} {
        display: flex;
        background-color: #fff;
    }
}
.summaryButton {
    position: fixed;
    right: 1%;
    bottom: 0;
}
.childrenContainer {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}
.heading {
    margin-top: ${theme.typography.pxToRem(16)};
}
`,
);
