import * as types from '../actions/actionTypes'

const initialState = {
		selectedLanguage:'english',
		english:{
			menuBar:{
				home:'Home',
				about:'About',
				contact:'Contact',
				packages:'Packages',
				gallery:'Gallery',
			},
			home:
			{
				headerTitle:{value:'Sea Lion'},
				headerSubtitle:{value:'Yoga, Food, Nature...'},
				welcomeTitle:{value:'Welcome'},
				welcomeText:{value:'בואו לחוות ימים קסומים של תרגול יוגה אכילה טובה והטבע המרהיב של פארוס. תרגול יוגה באויר הפתוח בנקודות שונות באי. מסלולי הליכה מרהבים בליווי פיקניק ופינוקים, ארחות גורמה במסעדות הנבחרו בקפידה ומארוחות שף אישיות מותאמת למזג האויר טריות השוק ולתזונתו של האורח. בין תרגול יוגה לארוחה, בין מנוחה למנוחה מציא האי פאורס חופים מטריפים ספורט ימי רכיבה על סוסים מוסיקה פסטיבלים ושפע של טבע כפרי בחופשה מאורגנת ומשולמת מראש בתקציב ובקצב שלכם.'},
				homeAboutYoga:{value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutYogaImage:{value:undefined},
				homeAboutFoodImage:{value:undefined},
				homeAboutMoreImage:{value:undefined},
				homeAboutNatureImage:{value:undefined},
				homeAboutFood:{value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutNature:{value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutMore:{value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
			},
			about:{
				aboutImage:{},
				aboutTitle:{value:'About Us'},
				mainDescription:{value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
			}
		},
		hebrew:{
			menuBar:{
				home:'בית',
				about:'אודות',
				contact:'יצירת קשר',
				packages:'חבילות',
				gallery:'גלריה',
			},
			home:
			{
				headerTitle:{ value:'אריה הים'},
				headerSubtitle:{ value:'יוגה, אוכל, טבע'},
				welcomeTitle:{ value:'ברוכים הבאים'},
				homeAboutYogaImage:{value:undefined},
				homeAboutFoodImage:{value:undefined},
				homeAboutMoreImage:{value:undefined},
				homeAboutNatureImage:{value:undefined},
				welcomeText:{ value:'בואו לחוות ימים קסומים של תרגול יוגה אכילה טובה והטבע המרהיב של פארוס. תרגול יוגה באויר הפתוח בנקודות שונות באי. מסלולי הליכה מרהבים בליווי פיקניק ופינוקים, ארחות גורמה במסעדות הנבחרו בקפידה ומארוחות שף אישיות מותאמת למזג האויר טריות השוק ולתזונתו של האורח. בין תרגול יוגה לארוחה, בין מנוחה למנוחה מציא האי פאורס חופים מטריפים ספורט ימי רכיבה על סוסים מוסיקה פסטיבלים ושפע של טבע כפרי בחופשה מאורגנת ומשולמת מראש בתקציב ובקצב שלכם.'},
				homeAboutYoga:{ value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutFood:{ value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutNature:{ value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
				homeAboutMore:{ value:'תרגול יוגה הוא תרגול המבוסס בעיקר על תרגול פיזי הפועל על כמה רמות, ברמה הפיזית, ברמה האנרגטית'},
			},
			about:{
				aboutImage:{},
				aboutTitle:{ value:'About Us'},
				mainDescription:{ value:'Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices. /n/nWe send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.'}
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