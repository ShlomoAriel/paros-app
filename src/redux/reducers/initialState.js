export default{
	login:{},
	calendar:{
		form:{},
		events:[],
	},
	packageState:{
		packageForm:{},
		list:[],
	},
	accommodation:{
		packageForm:{},
		list:[],
	},
	product:{
		categories:[
			{id:1, name:'Yoga'},
			{id:1, name:'Meals'},
			{id:1, name:'Accommodation'},
		],
		selectedProducts:[],
		productForm:{},
		list:[
			{
				id:1,
				name:'product1',
				price:200,
				description:'1 sessions',
				imagePath:'',
				categoryId:'1',
				dates:{
					start:'Mon Aug 21 2017 18:07:04 GMT+0300 (EEST)',
					end:'Tue Aug 22 2017 18:07:04 GMT+0300 (EEST)',
				}
			},
			{
				id:5,
				name:'product5',
				price:250,
				description:'2 sessions',
				imagePath:'',
				categoryId:'1',
				dates:{
					start:'Mon Aug 21 2017 18:07:04 GMT+0300 (EEST)',
					end:'Tue Aug 22 2017 18:07:04 GMT+0300 (EEST)',
				}
			},
			{
				id:7,
				name:'product2',
				price:200,
				description:'description2',
				imagePath:'',
				categoryId:'2',
				dates:{
					start:'Mon Aug 21 2017 18:07:04 GMT+0300 (EEST)',
					end:'Tue Aug 22 2017 18:07:04 GMT+0300 (EEST)',
				}
			}
		],
	},
	course:{
		
	},
	contact:{
		contactForm:{}
	},
	admin:{
		loading:false,
	}
}