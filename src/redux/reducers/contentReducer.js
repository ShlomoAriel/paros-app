import * as types from '../actions/actionTypes'

const initialState = {
		galleryPath:'',
		selectedLanguage:'english',
		english:{
			labels:{
				accommodation:'Accommodation',
				meals:'Meals',
				price:'Price',
				email:'Email',
				phone:'Phone',
				garden:'The Garden',
				about:'About Us',
				home:'Home',
				packages:'Packages',
				gallery:'Gallery',
				more:'More',
			},
			menuBar:{
				home:'Home',
				about:'About Us',
				paros:'Paros',
				yoga:'Yoga',
				more:'More',
				food:'Food',
				accommodation:'Accommodation',
				contact:'Contact',
				packages:'Packages',
				gallery:'Gallery',
			},
			home:
			{
				sectionNames:{
					yoga:'yoga',
					food:'food',
					accommodation:'accommodation',
					more:'more',
				},
				headerTitle:{value:'Sea Lion Eco Lodge'},
				headerLocationTitle:{value:'PAROS ISLAND, GREECE'},
				headerSubtitle:{value:'Yoga  -  Food  -  Accommodation'},
				welcomeTitle:{value:'Welcome'},
				welcomeText:{value:'בואו לחוות ימים קסומים של תרגול יוגה אכילה טובה והטבע המרהיב של פארוס. תרגול יוגה באויר הפתוח בנקודות שונות באי. מסלולי הליכה מרהבים בליווי פיקניק ופינוקים, ארחות גורמה במסעדות הנבחרו בקפידה ומארוחות שף אישיות מותאמת למזג האויר טריות השוק ולתזונתו של האורח. בין תרגול יוגה לארוחה, בין מנוחה למנוחה מציא האי פאורס חופים מטריפים ספורט ימי רכיבה על סוסים מוסיקה פסטיבלים ושפע של טבע כפרי בחופשה מאורגנת ומשולמת מראש בתקציב ובקצב שלכם.'},
				homeAboutYoga:{value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutYogaImage:{value:undefined},
				homeAboutFoodImage:{value:undefined},
				homeAboutMoreImage:{value:undefined},
				homeAboutAccommodationImage:{value:undefined},
				homeAboutFood:{value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutAccommodation:{value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutMore:{value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
			},
			about:{
				aboutImage:{},
				aboutTitle:{value:'About Us'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			paros:{
				parosImage:{},
				parosTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			yoga:{
				yogaImage:{},
				yogaImage2:{},
				yogaImage3:{},
				yogaTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				secondDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				thirdDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			food:{
				foodImage:{},
				foodImage2:{},
				foodImage3:{},
				foodTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				secondDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				thirdDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			more:{
				moreImage:{},
				moreImage2:{},
				moreImage3:{},
				moreTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				secondDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				thirdDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			accommodation:{
				accommodationImage:{},
				accommodationTitle:{value:'Accommodation'},
				mainDescription:{value:'Accommodation content.'},
				secondDescription:{value:''},
				thirdDescription:{value:''}
			}
		},
		french:{
			labels:{
				accommodation:'Hébergement',
				meals:'Meals',
				price:'Price',
				email:'Email',
				phone:'Phone',
				garden:'The Garden',
				about:'About',
				home:'Home',
				packages:'Paquets',
				gallery:'Galerie',
				more:'Plus',
			},
			menuBar:{
				home:'Home',
				about:'About Us',
				paros:'Paros',
				yoga:'Yoga',
				more:'More',
				food:'Food',
				accommodation:'Hébergement',
				contact:'Contact',
				packages:'Paquets',
				gallery:'Galerie',
			},
			home:
			{
				sectionNames:{
					yoga:'Yoga',
					food:'Aliments',
					accommodation:'Hébergement',
					more:'Plus',
				},
				headerTitle:{value:'Sea Lion Eco Lodge'},
				headerLocationTitle:{value:'PAROS ISLAND, GREECE'},
				headerSubtitle:{value:'Yoga, Food, Hébergement...'},
				welcomeTitle:{value:'Welcome'},
				welcomeText:{value:'Entrez le contenu'},
				homeAboutYoga:{value:'Entrez le contenu'},
				homeAboutYogaImage:{value:undefined},
				homeAboutFoodImage:{value:undefined},
				homeAboutMoreImage:{value:undefined},
				homeAboutAccommodationImage:{value:undefined},
				homeAboutFood:{value:'Entrez le contenu'},
				homeAboutAccommodation:{value:'Entrez le contenu'},
				homeAboutMore:{value:'Entrez le contenu'},
			},
			about:{
				aboutImage:{},
				aboutTitle:{value:'About Us'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			paros:{
				parosImage:{},
				parosTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			yoga:{
				yogaImage:{},
				yogaImage2:{},
				yogaImage3:{},
				yogaTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				secondDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				thirdDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			food:{
				foodImage:{},
				foodImage2:{},
				foodImage3:{},
				foodTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				secondDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				thirdDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			more:{
				moreImage:{},
				moreImage2:{},
				moreImage3:{},
				moreTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				secondDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				thirdDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			accommodation:{
				accommodationImage:{},
				accommodationTitle:{value:'Hébergement'},
				mainDescription:{value:'Hébergement content.'},
				secondDescription:{value:''},
				thirdDescription:{value:''}
			}
		},
		hebrew:{
			labels:{
				accommodation:'לינה',
				meals:'ארוחות',
				price:'מחיר',
				email:'דואר אלקטרוני',
				phone:'טלפון',
				garden:'הגן',
				about:'אודות',
				packages:'חבילות',
				home:'בית',
				gallery:'גלריה',
				more:'עוד',
			},
			menuBar:{
				home:'בית',
				about:'אודות',
				paros:'פארוס',
				yoga:'Yoga',
				more:'More',
				food:'Food',
				accommodation:'לינה',
				contact:'יצירת קשר',
				packages:'חבילות',
				gallery:'גלריה',
			},
			home:
			{
				sectionNames:{
					yoga:'יוגה',
					food:'אוכל',
					accommodation:'לינה',
					more:'עוד',
				},
				headerTitle:{value:'Sea Lion Eco Lodge'},
				headerLocationTitle:{value:'פארוס, יוון'},
				headerSubtitle:{ value:'יוגה  -  אוכל  -  לינה  -  טבע'},
				welcomeTitle:{ value:'ברוכים הבאים'},
				homeAboutYogaImage:{value:undefined},
				homeAboutFoodImage:{value:undefined},
				homeAboutMoreImage:{value:undefined},
				homeAboutAccommodationImage:{value:undefined},
				welcomeText:{ value:'בואו לחוות ימים קסומים של תרגול יוגה אכילה טובה והטבע המרהיב של פארוס. תרגול יוגה באויר הפתוח בנקודות שונות באי. מסלולי הליכה מרהבים בליווי פיקניק ופינוקים, ארחות גורמה במסעדות הנבחרו בקפידה ומארוחות שף אישיות מותאמת למזג האויר טריות השוק ולתזונתו של האורח. בין תרגול יוגה לארוחה, בין מנוחה למנוחה מציא האי פאורס חופים מטריפים ספורט ימי רכיבה על סוסים מוסיקה פסטיבלים ושפע של טבע כפרי בחופשה מאורגנת ומשולמת מראש בתקציב ובקצב שלכם.'},
				homeAboutYoga:{ value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutFood:{ value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutAccommodation:{ value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutMore:{ value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
			},
			about:{
				aboutImage:{},
				aboutTitle:{ value:'About Us'},
				mainDescription:{ value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			paros:{
				parosImage:{},
				parosTitle:{value:'האי פארוס'},
				mainDescription:{value:'אודות האי פארוס'}
			},
			yoga:{
				yogaImage:{},
				yogaImage2:{},
				yogaImage3:{},
				yogaTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				secondDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				thirdDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			food:{
				foodImage:{},
				foodImage2:{},
				foodImage3:{},
				foodTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				secondDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				thirdDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			more:{
				moreImage:{},
				moreImage2:{},
				moreImage3:{},
				moreTitle:{value:'Paros Island'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				secondDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'},
				thirdDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			},
			accommodation:{
				accommodationImage:{},
				accommodationTitle:{value:'לינה'},
				mainDescription:{value:'לינה.'},
				secondDescription:{value:''},
				thirdDescription:{value:''}
			}
		}
	}

import R from 'ramda'
export default function adminReducer(state = initialState, action){
	switch (action.type){
		case types.UPDATE_CONTENT_FIELD:
			return R.assocPath([state.selectedLanguage, action.section, action.field, 'value'], action.value,state)
		case types.SET_LANGUAGE:
			return R.assoc('selectedLanguage', action.language,state)
		case types.SET_GALLERY_PATH:
			return R.assoc('galleryPath', action.galleryPath,state)
		case types.SET_CONTENT_MAP:
			// let newState = R.clone(state)
			let content = {}
			action.contentMap.forEach( item =>{
				if(item.language && item.section && item.name){
					if(!content[item.language]){
						content[item.language] = {}
					}
					if(!content[item.language][item.section]){
						content[item.language][item.section] = {}
					}
					if(!content[item.language][item.section][item.name]){
						content[item.language][item.section][item.name] = {}
					}
					content[item.language][item.section][item.name]._id = item._id
					content[item.language][item.section][item.name].value = item.content
				}
			})
			return R.mergeDeepLeft(content,state)
		default: 
			return state;
	}
}