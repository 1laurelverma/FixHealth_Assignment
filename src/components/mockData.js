const mockData = {
  doctors: [
    {
      name: "Dr. Arjun Sharma",
      expertise: "Cardiologist",
      city: "Mumbai",
    },
    {
      name: "Dr. Neha Gupta",
      expertise: "Pediatrician",
      city: "Mumbai",
    },
    {
      name: "Dr. Rajesh Verma",
      expertise: "Orthopedic Surgeon",
      city: "Mumbai",
    },
    {
      name: "Dr. Ananya Desai",
      expertise: "Dermatologist",
      city: "Mumbai",
    },
    {
      name: "Dr. Sanjay Patel",
      expertise: "Ophthalmologist",
      city: "Mumbai",
    },
    {
      name: "Dr. Priya Singh",
      expertise: "ENT Specialist",
      city: "Mumbai",
    },
    {
      name: "Dr. Ravi Kumar",
      expertise: "Cardiologist",
      city: "Delhi",
    },
    {
      name: "Dr. Anjali Chopra",
      expertise: "Pediatrician",
      city: "Delhi",
    },
    {
      name: "Dr. Sunil Sharma",
      expertise: "Orthopedic Surgeon",
      city: "Delhi",
    },
    {
      name: "Dr. Meera Reddy",
      expertise: "Dermatologist",
      city: "Delhi",
    },
    {
      name: "Dr. Rohit Verma",
      expertise: "Ophthalmologist",
      city: "Delhi",
    },
    {
      name: "Dr. Preeti Saxena",
      expertise: "ENT Specialist",
      city: "Delhi",
    },
    {
      name: "Dr. Karthik Nair",
      expertise: "Cardiologist",
      city: "Bangalore",
    },
    {
      name: "Dr. Anika Joshi",
      expertise: "Pediatrician",
      city: "Bangalore",
    },
    {
      name: "Dr. Suresh Menon",
      expertise: "Orthopedic Surgeon",
      city: "Bangalore",
    },
    {
      name: "Dr. Priyanka Shah",
      expertise: "Dermatologist",
      city: "Bangalore",
    },
    {
      name: "Dr. Vivek Raj",
      expertise: "Ophthalmologist",
      city: "Bangalore",
    },
    {
      name: "Dr. Ananya Kapoor",
      expertise: "ENT Specialist",
      city: "Bangalore",
    },
    {
      name: "Dr. Manish Agarwal",
      expertise: "Cardiologist",
      city: "Chennai",
    },
    {
      name: "Dr. Priya Sharma",
      expertise: "Pediatrician",
      city: "Chennai",
    },
    {
      name: "Dr. Sameer Kapoor",
      expertise: "Orthopedic Surgeon",
      city: "Chennai",
    },
    {
      name: "Dr. Anjali Mehta",
      expertise: "Dermatologist",
      city: "Chennai",
    },
    {
      name: "Dr. Rahul Singh",
      expertise: "Ophthalmologist",
      city: "Chennai",
    },
    {
      name: "Dr. Nisha Patel",
      expertise: "ENT Specialist",
      city: "Chennai",
    },
    {
      name: "Dr. Amit Shah",
      expertise: "Cardiologist",
      city: "Hyderabad",
    },
    {
      name: "Dr. Sneha Reddy",
      expertise: "Pediatrician",
      city: "Hyderabad",
    },
    {
      name: "Dr. Vikas Gupta",
      expertise: "Orthopedic Surgeon",
      city: "Hyderabad",
    },
    {
      name: "Dr. Ananya Reddy",
      expertise: "Dermatologist",
      city: "Hyderabad",
    },
    {
      name: "Dr. Karthik Rao",
      expertise: "Ophthalmologist",
      city: "Hyderabad",
    },
    {
      name: "Dr. Priyanka Verma",
      expertise: "ENT Specialist",
      city: "Hyderabad",
    },
    {
      name: "Dr. Aditya Singh",
      expertise: "Cardiologist",
      city: "Kolkata",
    },
    {
      name: "Dr. Ananya Sen",
      expertise: "Pediatrician",
      city: "Kolkata",
    },
    {
      name: "Dr. Vikram Das",
      expertise: "Orthopedic Surgeon",
      city: "Kolkata",
    },
    {
      name: "Dr. Priyanka Chatterjee",
      expertise: "Dermatologist",
      city: "Kolkata",
    },
    {
      name: "Dr. Raj Gupta",
      expertise: "Ophthalmologist",
      city: "Kolkata",
    },
    {
      name: "Dr. Anjali Bose",
      expertise: "ENT Specialist",
      city: "Kolkata",
    },
    {
      name: "Dr. Rohit Malhotra",
      expertise: "Cardiologist",
      city: "Pune",
    },
    {
      name: "Dr. Nisha Patel",
      expertise: "Pediatrician",
      city: "Pune",
    },
    {
      name: "Dr. Sameer Deshmukh",
      expertise: "Orthopedic Surgeon",
      city: "Pune",
    },
    {
      name: "Dr. Priya Sharma",
      expertise: "Dermatologist",
      city: "Pune",
    },
    {
      name: "Dr. Anjali Joshi",
      expertise: "Ophthalmologist",
      city: "Pune",
    },
    {
      name: "Dr. Sunil Rane",
      expertise: "ENT Specialist",
      city: "Pune",
    },
    {
      name: "Dr. Vikas Reddy",
      expertise: "Cardiologist",
      city: "Ahmedabad",
    },
    {
      name: "Dr. Anusha Patel",
      expertise: "Pediatrician",
      city: "Ahmedabad",
    },
    {
      name: "Dr. Suresh Shah",
      expertise: "Orthopedic Surgeon",
      city: "Ahmedabad",
    },
    {
      name: "Dr. Neha Trivedi",
      expertise: "Dermatologist",
      city: "Ahmedabad",
    },
    {
      name: "Dr. Rahul Mehta",
      expertise: "Ophthalmologist",
      city: "Ahmedabad",
    },
    {
      name: "Dr. Anjali Patel",
      expertise: "ENT Specialist",
      city: "Ahmedabad",
    },
    {
      name: "Dr. Arvind Sharma",
      expertise: "Cardiologist",
      city: "Jaipur",
    },
    {
      name: "Dr. Neha Singh",
      expertise: "Pediatrician",
      city: "Jaipur",
    },
    {
      name: "Dr. Suman Kapoor",
      expertise: "Orthopedic Surgeon",
      city: "Jaipur",
    },
    {
      name: "Dr. Ananya Mehta",
      expertise: "Dermatologist",
      city: "Jaipur",
    },
    {
      name: "Dr. Rajiv Saxena",
      expertise: "Ophthalmologist",
      city: "Jaipur",
    },
    {
      name: "Dr. Pooja Verma",
      expertise: "ENT Specialist",
      city: "Jaipur",
    },
    {
      name: "Dr. Sameer Agarwal",
      expertise: "Cardiologist",
      city: "Lucknow",
    },
    {
      name: "Dr. Anjali Yadav",
      expertise: "Pediatrician",
      city: "Lucknow",
    },
    {
      name: "Dr. Vivek Sharma",
      expertise: "Orthopedic Surgeon",
      city: "Lucknow",
    },
    {
      name: "Dr. Priyanka Kapoor",
      expertise: "Dermatologist",
      city: "Lucknow",
    },
    {
      name: "Dr. Rohit Tiwari",
      expertise: "Ophthalmologist",
      city: "Lucknow",
    },
    {
      name: "Dr. Ananya Mishra",
      expertise: "ENT Specialist",
      city: "Lucknow",
    },
    {
      name: "Dr. Anjali Mehra",
      expertise: "Cardiologist",
      city: "Kochi",
    },
    {
      name: "Dr. Rohan Nair",
      expertise: "Pediatrician",
      city: "Kochi",
    },
    {
      name: "Dr. Priya Menon",
      expertise: "Orthopedic Surgeon",
      city: "Kochi",
    },
    {
      name: "Dr. Ananya Pillai",
      expertise: "Dermatologist",
      city: "Kochi",
    },
    {
      name: "Dr. Rahul Kumar",
      expertise: "Ophthalmologist",
      city: "Kochi",
    },
    {
      name: "Dr. Neha Varma",
      expertise: "ENT Specialist",
      city: "Kochi",
    },
    {
      name: "Dr. Vivek Sharma",
      expertise: "Cardiologist",
      city: "Indore",
    },
    {
      name: "Dr. Anusha Jain",
      expertise: "Pediatrician",
      city: "Indore",
    },
    {
      name: "Dr. Suman Mehta",
      expertise: "Orthopedic Surgeon",
      city: "Indore",
    },
    {
      name: "Dr. Priyanka Verma",
      expertise: "Dermatologist",
      city: "Indore",
    },
    {
      name: "Dr. Rajiv Singh",
      expertise: "Ophthalmologist",
      city: "Indore",
    },
    {
      name: "Dr. Ananya Trivedi",
      expertise: "ENT Specialist",
      city: "Indore",
    },
    {
      name: "Dr. Arjun Kumar",
      expertise: "Cardiologist",
      city: "Chandigarh",
    },
    {
      name: "Dr. Neha Bhatia",
      expertise: "Pediatrician",
      city: "Chandigarh",
    },
    {
      name: "Dr. Suresh Chauhan",
      expertise: "Orthopedic Surgeon",
      city: "Chandigarh",
    },
    {
      name: "Dr. Ananya Khanna",
      expertise: "Dermatologist",
      city: "Chandigarh",
    },
    {
      name: "Dr. Rohit Malhotra",
      expertise: "Ophthalmologist",
      city: "Chandigarh",
    },
    {
      name: "Dr. Pooja Verma",
      expertise: "ENT Specialist",
      city: "Chandigarh",
    },
    {
      name: "Dr. Vikas Kapoor",
      expertise: "Cardiologist",
      city: "Bhopal",
    },
    {
      name: "Dr. Anusha Mishra",
      expertise: "Pediatrician",
      city: "Bhopal",
    },
    {
      name: "Dr. Sameer Kumar",
      expertise: "Orthopedic Surgeon",
      city: "Bhopal",
    },
    {
      name: "Dr. Priyanka Yadav",
      expertise: "Dermatologist",
      city: "Bhopal",
    },
    {
      name: "Dr. Vivek Nair",
      expertise: "Ophthalmologist",
      city: "Bhopal",
    },
    {
      name: "Dr. Anjali Verma",
      expertise: "ENT Specialist",
      city: "Bhopal",
    },
    {
      name: "Dr. Anand Kumar",
      expertise: "Cardiologist",
      city: "Guwahati",
    },
    {
      name: "Dr. Neha Sharma",
      expertise: "Pediatrician",
      city: "Guwahati",
    },
    {
      name: "Dr. Vikrant Reddy",
      expertise: "Orthopedic Surgeon",
      city: "Guwahati",
    },
    {
      name: "Dr. Priyanka Das",
      expertise: "Dermatologist",
      city: "Guwahati",
    },
    {
      name: "Dr. Rohit Choudhary",
      expertise: "Ophthalmologist",
      city: "Guwahati",
    },
    {
      name: "Dr. Nisha Singh",
      expertise: "ENT Specialist",
      city: "Guwahati",
    },
    {
      name: "Dr. Anjali Tiwari",
      expertise: "Cardiologist",
      city: "Coimbatore",
    },
    {
      name: "Dr. Sameer Verma",
      expertise: "Pediatrician",
      city: "Coimbatore",
    },
    {
      name: "Dr. Suman Kapoor",
      expertise: "Orthopedic Surgeon",
      city: "Coimbatore",
    },
    {
      name: "Dr. Priyanka Reddy",
      expertise: "Dermatologist",
      city: "Coimbatore",
    },
    {
      name: "Dr. Rohan Nair",
      expertise: "Ophthalmologist",
      city: "Coimbatore",
    },
    {
      name: "Dr. Ananya Menon",
      expertise: "ENT Specialist",
      city: "Coimbatore",
    },
    {
      name: "Dr. Vikram Das",
      expertise: "Cardiologist",
      city: "Surat",
    },
    {
      name: "Dr. Anjali Patel",
      expertise: "Pediatrician",
      city: "Surat",
    },
    {
      name: "Dr. Suresh Mehta",
      expertise: "Orthopedic Surgeon",
      city: "Surat",
    },
    {
      name: "Dr. Neha Shah",
      expertise: "Dermatologist",
      city: "Surat",
    },
    {
      name: "Dr. Rohit Kapoor",
      expertise: "Ophthalmologist",
      city: "Surat",
    },
    {
      name: "Dr. Preeti Verma",
      expertise: "ENT Specialist",
      city: "Surat",
    },
    {
      name: "Dr. Karthik Nair",
      expertise: "Cardiologist",
      city: "Vadodara",
    },
    {
      name: "Dr. Anika Joshi",
      expertise: "Pediatrician",
      city: "Vadodara",
    },
    {
      name: "Dr. Suresh Menon",
      expertise: "Orthopedic Surgeon",
      city: "Vadodara",
    },
    {
      name: "Dr. Priyanka Shah",
      expertise: "Dermatologist",
      city: "Vadodara",
    },
    {
      name: "Dr. Vivek Raj",
      expertise: "Ophthalmologist",
      city: "Vadodara",
    },
    {
      name: "Dr. Ananya Kapoor",
      expertise: "ENT Specialist",
      city: "Vadodara",
    },
    {
      name: "Dr. Anjali Desai",
      expertise: "Cardiologist",
      city: "Amritsar",
    },
    {
      name: "Dr. Rohit Kapoor",
      expertise: "Pediatrician",
      city: "Amritsar",
    },
    {
      name: "Dr. Priyanka Singh",
      expertise: "Orthopedic Surgeon",
      city: "Amritsar",
    },
    {
      name: "Dr. Sameer Agarwal",
      expertise: "Dermatologist",
      city: "Amritsar",
    },
    {
      name: "Dr. Nisha Sharma",
      expertise: "Ophthalmologist",
      city: "Amritsar",
    },
    {
      name: "Dr. Ananya Verma",
      expertise: "ENT Specialist",
      city: "Amritsar",
    },
    {
      name: "Dr. Vikas Kumar",
      expertise: "Cardiologist",
      city: "Visakhapatnam",
    },
    {
      name: "Dr. Anusha Rao",
      expertise: "Pediatrician",
      city: "Visakhapatnam",
    },
    {
      name: "Dr. Suresh Menon",
      expertise: "Orthopedic Surgeon",
      city: "Visakhapatnam",
    },
    {
      name: "Dr. Neha Reddy",
      expertise: "Dermatologist",
      city: "Visakhapatnam",
    },
    {
      name: "Dr. Rohit Sharma",
      expertise: "Ophthalmologist",
      city: "Visakhapatnam",
    },
    {
      name: "Dr. Preeti Nair",
      expertise: "ENT Specialist",
      city: "Visakhapatnam",
    },
    {
      name: "Dr. Arjun Mehta",
      expertise: "Cardiologist",
      city: "Bhubaneswar",
    },
    {
      name: "Dr. Neha Patel",
      expertise: "Pediatrician",
      city: "Bhubaneswar",
    },
    {
      name: "Dr. Suman Reddy",
      expertise: "Orthopedic Surgeon",
      city: "Bhubaneswar",
    },
    {
      name: "Dr. Priyanka Mohan",
      expertise: "Dermatologist",
      city: "Bhubaneswar",
    },
    {
      name: "Dr. Rajiv Kumar",
      expertise: "Ophthalmologist",
      city: "Bhubaneswar",
    },
    {
      name: "Dr. Ananya Joshi",
      expertise: "ENT Specialist",
      city: "Bhubaneswar",
    },
    {
      name: "Dr. Karthik Reddy",
      expertise: "Cardiologist",
      city: "Nagpur",
    },
    {
      name: "Dr. Anjali Mehta",
      expertise: "Pediatrician",
      city: "Nagpur",
    },
    {
      name: "Dr. Suresh Choudhary",
      expertise: "Orthopedic Surgeon",
      city: "Nagpur",
    },
    {
      name: "Dr. Neha Kapoor",
      expertise: "Dermatologist",
      city: "Nagpur",
    },
    {
      name: "Dr. Rohit Singh",
      expertise: "Ophthalmologist",
      city: "Nagpur",
    },
    {
      name: "Dr. Pooja Tiwari",
      expertise: "ENT Specialist",
      city: "Nagpur",
    },
    {
      name: "Dr. Ananya Rao",
      expertise: "Cardiologist",
      city: "Ahmednagar",
    },
    {
      name: "Dr. Rohit Verma",
      expertise: "Pediatrician",
      city: "Ahmednagar",
    },
    {
      name: "Dr. Priyanka Nair",
      expertise: "Orthopedic Surgeon",
      city: "Ahmednagar",
    },
    {
      name: "Dr. Sameer Patel",
      expertise: "Dermatologist",
      city: "Ahmednagar",
    },
    {
      name: "Dr. Nisha Sharma",
      expertise: "Ophthalmologist",
      city: "Ahmednagar",
    },
    {
      name: "Dr. Anjali Desai",
      expertise: "ENT Specialist",
      city: "Ahmednagar",
    },
    {
      name: "Dr. Vikrant Reddy",
      expertise: "Cardiologist",
      city: "Raipur",
    },
    {
      name: "Dr. Anusha Verma",
      expertise: "Pediatrician",
      city: "Raipur",
    },
    {
      name: "Dr. Suresh Mehta",
      expertise: "Orthopedic Surgeon",
      city: "Raipur",
    },
    {
      name: "Dr. Neha Singh",
      expertise: "Dermatologist",
      city: "Raipur",
    },
    {
      name: "Dr. Rohan Nair",
      expertise: "Ophthalmologist",
      city: "Raipur",
    },
    {
      name: "Dr. Preeti Nair",
      expertise: "ENT Specialist",
      city: "Raipur",
    },
    {
      name: "Dr. Anjali Choudhary",
      expertise: "Cardiologist",
      city: "Jodhpur",
    },
    {
      name: "Dr. Sameer Kapoor",
      expertise: "Pediatrician",
      city: "Jodhpur",
    },
    {
      name: "Dr. Priyanka Mehta",
      expertise: "Orthopedic Surgeon",
      city: "Jodhpur",
    },
    {
      name: "Dr. Neha Reddy",
      expertise: "Dermatologist",
      city: "Jodhpur",
    },
    {
      name: "Dr. Rohit Sharma",
      expertise: "Ophthalmologist",
      city: "Jodhpur",
    },
    {
      name: "Dr. Ananya Joshi",
      expertise: "ENT Specialist",
      city: "Jodhpur",
    },
    {
      name: "Dr. Vikram Das",
      expertise: "Cardiologist",
      city: "Aurangabad",
    },
    {
      name: "Dr. Anjali Patel",
      expertise: "Pediatrician",
      city: "Aurangabad",
    },
    {
      name: "Dr. Suresh Kumar",
      expertise: "Orthopedic Surgeon",
      city: "Aurangabad",
    },
    {
      name: "Dr. Priyanka Sharma",
      expertise: "Dermatologist",
      city: "Aurangabad",
    },
    {
      name: "Dr. Vivek Raj",
      expertise: "Ophthalmologist",
      city: "Aurangabad",
    },
    {
      name: "Dr. Ananya Kapoor",
      expertise: "ENT Specialist",
      city: "Aurangabad",
    },
  ],
};

export default mockData;
