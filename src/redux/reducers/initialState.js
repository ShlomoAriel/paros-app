export default{
	login:{},
	calendar:{
		form:{},
		events:[],
	},
	packageState:{
		packageForm:{},
		list:[
			{
				id:1,
				image:'gallery_list-1.jpg',
				name:'Vafankulo',
				description:'This format perfectly fits in case you need only a single image for your post display. Use Featured image option to add image to the post.',
				homeImagePath:'',
				previewImagePath:'images/gallery_list-1.jpg',
				pageImagePath:'',
				dates:{
					start:'Mon Aug 28 2017 18:07:04 GMT+0300 (EEST)',
					end:'Tue Aug 29 2017 18:07:04 GMT+0300 (EEST)',
				}
			},
			{
				id:2,
				image:'gallery_list-2.jpg',
				name:'Vafankulo',
				description:'This format perfectly fits in case you need only a single image for your post display. Use Featured image option to add image to the post.',
				homeImagePath:'',
				previewImagePath:'images/gallery_list-1.jpg',
				pageImagePath:'',
				start:'Mon Aug 28 2017 18:07:04 GMT+0300 (EEST)',
				end:'Tue Aug 29 2017 18:07:04 GMT+0300 (EEST)',
			},
			{
				id:3,
				image:'gallery_list-3.jpg',
				name:'Vafankulo',
				description:'This format perfectly fits in case you need only a single image for your post display. Use Featured image option to add image to the post.',
				homeImagePath:'',
				previewImagePath:'images/gallery_list-1.jpg',
				pageImagePath:'',
				start:'Mon Aug 28 2017 18:07:04 GMT+0300 (EEST)',
				end:'Tue Aug 29 2017 18:07:04 GMT+0300 (EEST)',
			},
			{
				id:4,
				image:'gallery_list-4.jpg',
				meals:'All Included',
				accommodation:'All included',
				name:'Full Power Yoga',
				description:'3 Times a day yoga. Morning, after noone and evening blah blah blah - 4 Days',
				price: 250,
				homeImagePath:'',
				previewImagePath:'/images/gallery_list-2.jpg',
				pageImagePath:'',
				start:'Mon Aug 21 2017 18:07:04 GMT+0300 (EEST)',
				end:'Tue Aug 22 2017 18:07:04 GMT+0300 (EEST)',
			}
			],
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