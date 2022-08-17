import { Component, OnInit } from '@angular/core';

interface Skills {
  title: string,
  time: number,
  level: number,
  details?: string
}

interface Project {
  name: string,
  roles: Array<string>,
  brief: string,
  time?: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nombreFull = 'Juan Cardona'
  roleFull = 'Sr. Software Engineer '
  geoFull = 'Cincinnati / Dayton, OH'
  phoneFull = '937 | 696-0130'
  emailFull = 'juan@juancardona.dev'
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

  projects: Array<Project> = [
    {
      name: 'D1scovery',
      roles: ['Tech Lead', 'Lead Developer', 'Configuration Manager', 'Subject Matter Expert', 'UI/UX'],
      brief: 'Encompasses 24 disparate applications with a wide range of use cases and users.',
      time: 4
    },
    {
      name: 'LIMS-EV',
      roles: ['Tech Lead', 'Lead Developer', 'Software Architecture', 'Front End Specialist', 'Front End Design', 'Unit Testing', 'UI/UX'],
      brief: 'Logistics, Installations and Mission Support - Enterprise View',
      time: 6
    },
    {
      name: 'ECS',
      roles: ['Software Architecture', 'Front End Lead', 'Front End Design', 'Integration Architect', 'Unit Testing', 'UI/UX'],
      brief: 'Enterprise Capabilities Suite - A suite of on-demand plug-in applications to provide communication, reporting, and data quality checks to mission applications.',
      time: 6
    },
    {
      name: 'DI2E Transition',
      roles: ['Research', 'Migration & Configuration of Ticketing System & Repositories', 'Documentation / Wiki'],
      brief: 'An effort to migrate the entire development effort (ticket tracking, repositories, ci/cd) into a new cloud solution.',
      time: 1
    },
    {
      name: 'Cost Reduction',
      roles: ['Cost Analysis', 'Use Analysis', 'Risk Analysis'],
      brief: 'An effort resulting in approximately $716,000 annual savings for the United States Air Force',
      time: 1
    }
  ]

  languages: Array<Skills> = [
    { title: 'HTML5', time: 10, level: 9 },
    { title: 'CSS/SCSS', time: 10, level: 9 },
    { title: 'JavaScript', time: 10, level: 9 },
    { title: 'Typescript', time: 6, level: 9 },
    { title: 'Python', time: 4, level: 5 },
    { title: 'Java', time: 4, level: 6 },
    { title: 'C#', time: 3, level: 4 }
  ]

  frameworks: Array<Skills> = [
    { title: 'Angular', time: 6, level: 9, details: 'AngularJS - Angular 14' },
    { title: 'React', time: 6, level: 9, details: 'React & React + Redux' },
    { title: 'Vue', time: 3, level: 6 }
  ]

  tools: Array<Skills> = [
    { title: 'Git', time: 6, level: 9 },
    { title: 'Jenkins', time: 6, level: 8 },
    { title: 'SonarQube', time: 5, level: 8 },
    { title: 'Maven', time: 6, level: 7 }
  ]

  experienceCards: any

  observer = new IntersectionObserver(cards => {
    cards.forEach(card => {
      card.target.classList.toggle('show', card.isIntersecting)
      // if (card.isIntersecting) {
      //   this.observer.unobserve(card.target)
      // }
    })
  }, {
    rootMargin: "-32px"
  })

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

    this.experienceCards = document.querySelectorAll('.experience__content')
    this.experienceCards.forEach((card: any) => {
      this.observer.observe(card)
    })
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
}
