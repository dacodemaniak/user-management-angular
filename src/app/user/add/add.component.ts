import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { HttpResponse } from '@angular/common/http';
import { RoleType } from '../../types/role.type';
import { RoleService } from '../services/role/role.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  public form: FormGroup | null = null

  public roles: Array<RoleType> = []

  constructor(
    private _formBuilder: FormBuilder,
    private _service: UserService,
    private _roleService: RoleService
  ) {}

  get c(): {[key: string]: AbstractControl} {
    return this.form!.controls
  }

  ngOnInit(): void {
    this._roleService.findAll()
      .pipe(
        take(1)
      )
      .subscribe((roles: Array<RoleType>) => {
        this.roles = roles
        this.form = this._formBuilder.group({
          lastname: [
            '',
            [
              Validators.required,
            ]
          ],
          firstname: [],
          birthdate: [
            '',
            [
              Validators.required
            ]
          ],
          role: [
            '',
            [
              Validators.required
            ]
          ]
        })
      })
  }

  onSubmit(): void {
    this._service.add(this.form!.value)
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(`Got : ${response.status} : ${JSON.stringify(response.body)}`)
        },
        error: (error) => {
          // Deal with error
        }
      })
  }
}
