var twoSum = function(nums, target) {
    const mapper = {};
    //this is the hash table
    
    for (let index = 0; index < nums.length; index++) {
       let difference = target - nums[index]; 
        
        if (difference in mapper) {
            return [mapper[difference], (index)]
        } else {
            mapper[nums[index]] = index;
        }
    }
         
};