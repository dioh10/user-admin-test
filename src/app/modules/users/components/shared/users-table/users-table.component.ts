import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReqresService} from '../../../services/api/reqres.service';
import {User} from '../../../types/reqres';
import {PageEvent} from '@angular/material/paginator';
import {CommunicatorService} from '../../../services/communication/communicator.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass']
})
export class UsersTableComponent implements OnInit {
  constructor(private reqresService: ReqresService,
              private communicatorService: CommunicatorService) {
  }

  columnsToDisplay: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar', 'action'];
  userList: User[] = [] as User[];
  allUsers: User[] = [] as User[];
  allUsersLoaded: boolean = false;
  pages: number = 0;
  currentPage: number = 0;
  pageSize: number = 0;
  pageSizeOptions: number[] = [6, 12];
  totalUsers: number = 0;
  lastPageSize: number = 6;
  @Output() selectedUser = new EventEmitter<User>();

  ngOnInit(): void {
    this.getInitialUsers();
    this.detectUserChanges();
  }

  selectUser(user: User) {
    this.selectedUser.emit(user);
  }

  activatePaginator(event: PageEvent) {
    const {pageSize, pageIndex} = event;
    if (this.allUsersLoaded) {
      this.userList = this.allUsers.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
    } else {
      if (pageSize !== this.lastPageSize) {
        this.getMoreUsers(pageSize, pageIndex + 1);
      }
      this.getMoreUsers(pageSize, pageIndex);
    }
  }

  getInitialUsers() {
    this.reqresService.getAllUsers().subscribe({
      next: (data) => {
        this.currentPage++;
        this.pages = data.total_pages;
        this.pageSize = data.per_page;
        this.userList = data.data;
        this.allUsers = data.data;
        this.totalUsers = data.total;
      }
    })
  }

  getMoreUsers(pageSize: number, pageIndex: number) {
    if (this.currentPage <= this.pages) {
      this.currentPage = pageIndex + 1;
      this.userPageApiCall(pageSize, pageIndex);
    }
  }

  checkIfAllUsersLoaded() {
    if (this.allUsers.length === this.totalUsers) {
      this.allUsersLoaded = true;
    }
  }

  userPageApiCall(pageSize: number, pageIndex: number) {
    if (this.currentPage <= this.pages) {
      this.reqresService.getUsersByPage(this.currentPage).subscribe({
        next: (data) => {
          this.allUsers = this.allUsers.concat(data.data);
          this.userList = this.allUsers.slice((pageIndex * pageSize), pageSize * (pageIndex + 1));
          this.checkIfAllUsersLoaded();
        }
      })
    }
  }

  detectUserChanges() {
    this.communicatorService.currentData.subscribe({
      next: (user: User) => {
        this.allUsers = this.allUsers.map((u: User) => {
          if (u.id === user.id) {
            return user;
          }
          return u;
        });
        this.userList = this.allUsers.slice(0, this.pageSize);
      }
    })
  }

}
