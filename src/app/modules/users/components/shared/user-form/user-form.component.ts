import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../types/reqres';
import {FormBuilder, Validators} from '@angular/forms';
import {ReqresService} from '../../../services/api/reqres.service';
import {CommunicatorService} from '../../../services/communication/communicator.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private reqresService: ReqresService,
    private communicatorService: CommunicatorService,
  ) { }
  @Input() user: User = {} as User;
  @Output() updatedUser = new EventEmitter<User>();

  userForm = this.formBuilder.group({
    id: [null, [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    avatar: ['', [Validators.required]],
  });

  ngOnInit(): void {
    // @ts-ignore
    this.userForm.patchValue(this.user);
  }

  handleSubmit() {
    this.reqresService.editUser(this.userForm.value).subscribe({
      next: (user) => {
        this.communicatorService.communicateData(user);
      }
    });
  }
}
