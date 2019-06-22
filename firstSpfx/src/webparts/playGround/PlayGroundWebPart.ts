import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';


import styles from './PlayGroundWebPart.module.scss';


export interface IPlayGroundWebPartProps {
  description: string;
  photo:string;
  firstName: String;
  lastName:string;
  likeSpfx:boolean;
}

export default class PlayGroundWebPart extends BaseClientSideWebPart<IPlayGroundWebPartProps> {

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description:'My Header' // strings.PropertyPaneDescription //can be changed to customize your webpart 
            //'MTM Description'
          },
          groups: [
            {
              groupName: 'Personal Info ', // can be changed too 'Blah Web Part info 
              groupFields: [
                PropertyPaneTextField('firstName', {
                  label: 'first Name'
                }),
                PropertyPaneTextField('lastName', {
                  label: 'Last Name',
                }),
                PropertyPaneTextField('photo', {
                  label: 'Photo Url',
                }),
                PropertyPaneTextField('description', {
                  label: 'Description',
                  multiline:true,
                  placeholder:'Please enter a description'
                }),
                PropertyPaneToggle('likeSpfx', {
                  label: 'Do you like Spfx ?',
                  offText:'No',
                  onText:'Yes',
                })
              ]
            }
          ]
        }
      ]
    };
  }

  
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.playGround }">
                <h2 style="text-align:center">${this.properties.firstName}'s Profile </h2>
                <div class="${styles.card}">
                <img src="${this.properties.photo}" alt="Beza" style="width:100%">
                <h1>${this.properties.firstName} ${this.properties.lastName}</h1>
                <p class="${styles.title}">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <div style="margin: 24px 0;">
                  <a href="#"><i class="fa fa-dribbble"></i></a> 
                  <a href="#"><i class="fa fa-twitter"></i></a>  
                  <a href="#"><i class="fa fa-linkedin"></i></a>  
                  <a href="#"><i class="fa fa-facebook"></i></a> 
                </div>
                <p><button>Contact</button></p>
              </div>
      </div>`;
  }

}
