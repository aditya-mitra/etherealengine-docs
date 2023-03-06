"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[63823],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=s,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:s,r[1]=i;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92769:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(87462),s=(t(67294),t(3905));const o={},r="Updating database models",i={unversionedId:"concepts/updating_and_seeding_database",id:"concepts/updating_and_seeding_database",title:"Updating database models",description:"Tooling for automatically updating the database based on changes in models is included in",source:"@site/docs/3_concepts/4_updating_and_seeding_database.md",sourceDirName:"3_concepts",slug:"/concepts/updating_and_seeding_database",permalink:"/etherealengine-docs/docs/concepts/updating_and_seeding_database",draft:!1,editUrl:"https://github.com/etherealengine/etherealengine-docs/docs/3_concepts/4_updating_and_seeding_database.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Component System",permalink:"/etherealengine-docs/docs/concepts/ecs"},next:{title:"Testing",permalink:"/etherealengine-docs/docs/testing/"}},l={},d=[{value:"Seeding",id:"seeding",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,s.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"updating-database-models"},"Updating database models"),(0,s.kt)("p",null,"Tooling for automatically updating the database based on changes in models is included in\n",(0,s.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/etherealengine/etherealengine/dev/packages/server-core/src/sequelize.ts"},"sequelize.ts"),". Most of it is controlled by setting\nthe environment variable ",(0,s.kt)("inlineCode",{parentName:"p"},"PREPARE_DATABSE=true"),". "),(0,s.kt)("p",null,"If that is set, then the database setup will iterate through every model's fields and try\nto match each one to a column. If it can't find an existing column, then one of two things will happen:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If the model has a value ",(0,s.kt)("inlineCode",{parentName:"li"},"oldColumn")," set on the field/foreignKey definition, and that old\ncolumn exists, then the old column will be renamed to the current name of the model field")),(0,s.kt)("p",null,"The following is an example of ",(0,s.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/etherealengine/etherealengine/dev/packages/server-core/src/user/user/user.model.ts"},"user.model.ts"),"\nwhere the field ",(0,s.kt)("inlineCode",{parentName:"p"},"inviteCode")," will be renamed to ",(0,s.kt)("inlineCode",{parentName:"p"},"codeInvite"),", and the association that was called\n",(0,s.kt)("inlineCode",{parentName:"p"},"channelInstanceId")," is renamed to ",(0,s.kt)("inlineCode",{parentName:"p"},"instanceChannelId"),". Note the ",(0,s.kt)("inlineCode",{parentName:"p"},"oldColumn")," definition on each."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"import { DataTypes, Sequelize, Model } from 'sequelize'\nimport { Application } from '../../../declarations'\nimport { UserInterface } from '@etherealengine/common/src/dbmodels/UserInterface'\n\n/**\n * This model contain users information\n */\nexport default (app: Application) => {\n  const sequelizeClient: Sequelize = app.get('sequelizeClient')\n  const User = sequelizeClient.define<Model<UserInterface>>(\n    'user',\n    {\n      id: {\n        type: DataTypes.UUID,\n        defaultValue: DataTypes.UUIDV1,\n        allowNull: false,\n        primaryKey: true\n      },\n      name: {\n        type: DataTypes.STRING,\n        defaultValue: (): string => 'Guest #' + Math.floor(Math.random() * (999 - 100 + 1) + 100),\n        allowNull: false\n      },\n      avatarId: {\n        type: DataTypes.STRING,\n        defaultValue: (): string => '',\n        allowNull: false\n      },\n      codeInvite: {\n        type: DataTypes.STRING,\n        oldColumn: 'inviteCode',\n        unique: true\n      }\n    },\n    {\n      hooks: {\n        beforeCount(options: any): void {\n          options.raw = true\n        }\n      }\n    }\n  )\n\n  ;(User as any).associate = (models: any): void => {\n    ;(User as any).belongsTo(models.user_role, { foreignKey: 'userRole' })\n    ;(User as any).belongsTo(models.instance, { foreignKey: { allowNull: true } }) // user can only be in one room at a time\n    ;(User as any).belongsTo(models.instance, { foreignKey: { name: 'instanceChannelId', oldColumn: 'channelInstanceId', allowNull: true } })\n    ;(User as any).hasOne(models.user_settings)\n    ;(User as any).belongsTo(models.party, { through: 'party_user' }) // user can only be part of one party at a time\n    ;(User as any).belongsToMany(models.user, {\n      as: 'relatedUser',\n      through: models.user_relationship\n    })\n    ;(User as any).hasMany(models.user_relationship, { onDelete: 'cascade' })\n    ;(User as any).belongsToMany(models.group, { through: 'group_user' }) // user can join multiple orgs\n    ;(User as any).hasMany(models.group_user, { unique: false, onDelete: 'cascade' })\n    ;(User as any).hasMany(models.identity_provider, { onDelete: 'cascade' })\n    ;(User as any).hasMany(models.static_resource)\n    // (User as any).hasMany(models.subscription);\n    ;(User as any).hasMany(models.channel, { foreignKey: 'userId1', onDelete: 'cascade' })\n    ;(User as any).hasMany(models.channel, { foreignKey: 'userId2', onDelete: 'cascade' })\n    // (User as any).hasOne(models.seat, { foreignKey: 'userId' });\n    ;(User as any).belongsToMany(models.location, { through: 'location_admin' })\n    ;(User as any).hasMany(models.location_admin, { unique: false })\n    ;(User as any).hasMany(models.location_ban)\n    ;(User as any).hasMany(models.bot, { foreignKey: 'userId' })\n    ;(User as any).hasMany(models.scope, { foreignKey: 'userId' })\n    ;(User as any).belongsToMany(models.instance, { through: 'instance_authorized_user' })\n    ;(User as any).hasOne(models.user_api_key)\n  }\n\n  return User\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If the model doesn't have ",(0,s.kt)("inlineCode",{parentName:"li"},"oldColumn"),", or it does and the old column doesn't exist, then it\nwill add a new column")),(0,s.kt)("p",null,"If the column does exist, then the current model for that column is applied to the column"),(0,s.kt)("h2",{id:"seeding"},"Seeding"),(0,s.kt)("p",null,"Seeding happens if either ",(0,s.kt)("inlineCode",{parentName:"p"},"FORCE_DB_REFRESH=true")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"PREPARE_DATABASE=true"),". Each seed template\nis iterated over, and the database is checked to see if that template value exists. Seed templates\nwith IDs are checked via a singular ",(0,s.kt)("inlineCode",{parentName:"p"},".get(<id>)"),", seed templates without an ID are checked via a\n",(0,s.kt)("inlineCode",{parentName:"p"},".find({ query: <template> })")," (settings tables just check if there is a row present, and assumes\nthat its presence is indicative of being seeded already). If a seed template is not found,\nthen it is inserted into the database."))}p.isMDXComponent=!0}}]);