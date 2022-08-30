export class UserTreeGridConfig {
  public readonly contextMenuItems!: Record<string, unknown>[];

  constructor() {
    this.contextMenuItems = [
      { text: 'EditCol', target: '.e-headercontent', id: 'editcol' },
      { text: 'AddCol', target: '.e-headercontent', id: 'addcol' },
      { text: 'ViewCol', target: '.e-headercontent', id: 'viewcol' },
      { text: 'DelCol', target: '.e-headercontent', id: 'delcol' },
      { separator: true, target: '.e-headercontent', id: 'separator' },
      { text: 'ChooseCol', target: '.e-headercontent', id: 'choosecol' },
      { text: 'FreezeCol', target: '.e-headercontent', id: 'freezecol' },
      { text: 'FilterCol', target: '.e-headercontent', id: 'filtercol' },
      { text: 'MultiSort', target: '.e-headercontent', id: 'multisort' },
      { text: 'AddNext', target: '.e-headercontent', id: 'addnext' },
      { text: 'AddChild', target: '.e-content', id: 'addchild' },
      { text: 'EditRow', target: '.e-content', id: 'editrow' },
      { text: 'SelectRows', target: '.e-content', id: 'selectrows' },
      { text: 'DelRows', target: '.e-content', id: 'delrows' },
      { text: 'CopyAsNext', target: '.e-content', id: 'copyasnext' },
      { text: 'CopyAsChild', target: '.e-content', id: 'copyaschild' },
      { text: 'MoveAsNext', target: '.e-content', id: 'moveasnext' },
      { text: 'MoveAsChild', target: '.e-content', id: 'moveaschild' },
    ]
  }
} 