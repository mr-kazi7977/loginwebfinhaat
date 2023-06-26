import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routes } from 'src/app/consts';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-vehicle-registry',
  templateUrl: './vehicle-registry.component.html',
  styleUrls: ['./vehicle-registry.component.css']
})
export class VehicleRegistryComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

