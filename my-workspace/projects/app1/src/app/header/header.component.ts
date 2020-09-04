import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account/account.service';
import { AvailableMenuListDto } from '../available-menu-list-dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // 親コンポーネントとの連係
  @Output() public sidenavToggle = new EventEmitter();

  // メニュー
  public availableMenuListDtoLists: AvailableMenuListDto[];

  constructor(private accountService: AccountService, public router: Router) {}

  ngOnInit() {
    // メニューを取得する。
    this.getAvailableMenu();
  }
  /**
   * メニューを取得する。
   */
  private getAvailableMenu(): void {
    console.log(this.availableMenuListDtoLists);
    // this.accountService
    //   .getAvailableMenu()
    //   .subscribe(
    //     (availableMenuListDtoLists) =>
    //       (this.availableMenuListDtoLists = availableMenuListDtoLists)
    //   );
  }
  /**
   * イベントを発生させる。
   */
  public onToggleSidenav = () => {
    console.log('onToggleSidenav');
    this.sidenavToggle.emit();
  };
}
