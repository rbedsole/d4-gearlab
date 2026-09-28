// GearLab normalized build contract. Provider adapters output this shape only.
window.GearLabBuildModel={
schemaVersion:"0.3",
empty(sourceUrl,provider){return{schemaVersion:this.schemaVersion,provider,sourceUrl,sourceBuildId:null,name:null,class:null,sourceUpdatedAt:null,importedAt:new Date().toISOString(),variants:[],unresolved:[]}},
variant(name,id){return{id:String(id??name),name:name||"Unnamed variant",equipment:{},charms:[],seal:null,runes:[],skills:[],spiritHall:null,paragon:null,glyphs:[],mercenary:null,providerData:{}}},
slot(){return{itemType:null,desiredAffixes:[],unique:null,guaranteedAffixes:[],variableAffixes:[],aspect:null,tempers:[],masterworkTargets:[],gem:null,providerData:{}}},
affix(id,name,desiredGA=false){return{id:id??null,name:name??null,priority:{category:"DESIRED",rank:null,source:"planner-target",confidence:"confirmed"},desiredGA:Boolean(desiredGA),providerData:{}}}
};