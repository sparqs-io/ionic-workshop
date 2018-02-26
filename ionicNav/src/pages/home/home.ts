import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NavigationDetailsPage } from "../navigation-details/navigation-details";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  items: any = [];

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        title: "Angular",
        icon: "angular",
        description:
          "A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.",
        color: "#E63135"
      },
      {
        title: "CSS3",
        icon: "css3",
        description:
          "The latest version of cascading stylesheets - the styling language of the web!",
        color: "#0CA9EA"
      },
      {
        title: "HTML5",
        icon: "html5",
        description: "The latest version of the web's markup language.",
        color: "#F46529"
      },
      {
        title: "JavaScript",
        icon: "javascript",
        description:
          "One of the most popular programming languages on the Web!",
        color: "#FFD439"
      },
      {
        title: "Sass",
        icon: "sass",
        description:
          "Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.",
        color: "#CE6296"
      },
      {
        title: "NodeJS",
        icon: "nodejs",
        description:
          "An open-source, cross-platform runtime environment for developing server-side Web applications.",
        color: "#78BD43"
      },
      {
        title: "Python",
        icon: "python",
        description:
          "A clear and powerful object-oriented programming language!",
        color: "#3575AC"
      },
      {
        title: "Markdown",
        icon: "markdown",
        description:
          "A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.",
        color: "#412159"
      },
      {
        title: "Tux",
        icon: "tux",
        description: "The official mascot of the Linux kernel!",
        color: "#000"
      }
    ];
  }

  onOpenDetailsView(item: any) {
    this.navCtrl.push(NavigationDetailsPage, {
      item: item
    });
  }

}
