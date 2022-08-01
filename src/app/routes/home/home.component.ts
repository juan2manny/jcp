import { Component, OnInit } from '@angular/core';

interface Skills {
  title: string,
  time: number,
  level: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stringNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  nombreFull = 'Juan Cardona'
  roleFull = 'Sr. Software Engineer '
  geoFull = 'Cincinnati / Dayton, OH'
  phoneFull = '513 | 444 5285'
  emailFull = 'j1cardona5852@gmail.com'
  nombre = ''
  role = ''
  geo = ''
  phone = ''
  email = ''

  nombreLength: number = 0
  roleLength: number = 0
  geoLength: number = 0
  phoneLength: number = 0
  emailLength: number = 0
  nombreCount: number = 0
  roleCount: number = 0
  geoCount: number = 0
  phoneCount: number = 0
  emailCount: number = 0
  text: string = ''

  skills: Array<Skills> = [
    { title: 'HTML5', time: 10, level: 9 },
    { title: 'CSS/SCSS', time: 10, level: 9 },
    { title: 'JavaScript', time: 10, level: 9 },
    { title: 'Typescript', time: 6, level: 9 },
    { title: 'Python', time: 4, level: 5 },
    { title: 'Java', time: 4, level: 6 },
    { title: 'C#', time: 3, level: 4 },
    { title: 'Maven', time: 6, level: 7 },
    { title: 'Angular', time: 6, level: 9 },
    { title: 'React', time: 6, level: 9 },
    { title: 'Redux', time: 6, level: 8 },
    { title: 'Git', time: 6, level: 9 },
    { title: 'Jenkins', time: 6, level: 8 },
    { title: 'SonarQube', time: 5, level: 8 },
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.typeName(this.nombreFull)
    }, 150)

    setTimeout(() => {
      this.typeRole(this.roleFull)
    }, 1150)
    setTimeout(() => {
      this.typeGeo(this.geoFull)
    }, 2150)
    setTimeout(() => {
      this.typePhone(this.phoneFull)
    }, 3350)
    setTimeout(() => {
      this.typeEmail(this.emailFull)
    }, 4350)
  }

  typeRole(full: string): void {
    if (!this.roleCount) {
      this.roleLength = full.length
      this.role = ''
    }
    if (this.roleCount < this.roleLength) {
      this.role += full.charAt(this.roleCount)
      this.roleCount++
      setTimeout(() => {
        this.typeRole(full)
      }, 50)
    }
  }

  typeName(full: string): void {
    if (!this.nombreCount) {
      this.nombreLength = full.length
      this.nombre = ''
    }
    if (this.nombreCount < this.nombreLength) {
      this.nombre += full.charAt(this.nombreCount)
      this.nombreCount++
      setTimeout(() => {
        this.typeName(full)
      }, 50)
    }
  }

  typeGeo(full: string): void {
    if (!this.geoCount) {
      this.geoLength = full.length
      this.geo = ''
    }
    if (this.geoCount < this.geoLength) {
      this.geo += full.charAt(this.geoCount)
      this.geoCount++
      setTimeout(() => {
        this.typeGeo(full)
      }, 50)
    }
  }

  typePhone(full: string): void {
    if (!this.phoneCount) {
      this.phoneLength = full.length
      this.phone = ''
    }
    if (this.phoneCount < this.phoneLength) {
      this.phone += full.charAt(this.phoneCount)
      this.phoneCount++
      setTimeout(() => {
        this.typePhone(full)
      }, 50)
    }
  }

  typeEmail(full: string): void {
    if (!this.emailCount) {
      this.emailLength = full.length
      this.email = ''
    }
    if (this.emailCount < this.emailLength) {
      this.email += full.charAt(this.emailCount)
      this.emailCount++
      setTimeout(() => {
        this.typeEmail(full)
      }, 50)
    }
  }

  getStringNumber(num: number): string {
    return this.stringNumbers[num]
  }

  getLevel(num: number): string {
    return `l${num}`
  }

  checkTen(num: number): string {
    return num === 10 ? '10+' : num.toString()
  }
}
