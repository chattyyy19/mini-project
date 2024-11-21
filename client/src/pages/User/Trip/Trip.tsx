import "./Trip.css";
import AddExpense from "../Forms/AddExpense";
import { TbTrashX, TbBookmark, TbUsersPlus, TbArrowBigUpLine, TbCash, TbPlus } from "react-icons/tb";
import { useState } from "react";

export default function Trip() {
    const [addExpense, setAddExpense] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0); // State for total amount
    const [items, setItems] = useState<string[]>([]);
    const [dates, setDate] = useState<Date[]>([]);
    const [amounts, setAmount] = useState<number[]>([]);

    // Add an item to the list
    const addItem = (item: string) => {
        setItems([...items, item]);
    };

    const addDate = (date: Date) => {
        setDate([...dates, date])
    };

    const addAmount = (amount: number) => {
        setAmount([...amounts, amount]);
    }

    function handleAddExpense(amount: number, date: Date) {
        addItem("Chirag owe you $" + amount / 2);
        console.log(items);
        addDate(date);
        addAmount(amount);
        setTotalAmount((prevAmount) => prevAmount + amount); // Update the total amount
    }


    return (
        <>
            <AddExpense
                display={addExpense}
                setDisplay={setAddExpense}
                onAddExpense={handleAddExpense} // Pass the handler to AddExpense
            />

            <div className="trip">
                <TripCu expense={setAddExpense} totalAmount={totalAmount} items={items} />

                <div className="tripTransactions">
                    <TripTransactionSection date={"October 31, 2024"} num={items.length} val={totalAmount}>
                        {dates.map((date, index) => (
                            <TripTransaction
                                key={index}
                                head={"YOU"}
                                date={date} // Format date if needed
                                amount={amounts[index]}
                            />
                        ))}

                    </TripTransactionSection>
                </div>
            </div>
        </>
    );
}




function TripTransactionSection({ date, num, val, children }: any) {

    return (

        <div className="tripTransactionSection">
            <div className="tripTransactionSectionHeader">
                <h3>{date}</h3>
                <div>
                    <p>No. of transactions: {num}</p>
                    <p>Value: {`$${val}`}</p>
                </div>
            </div>

            {children}
        </div>

    )

}


function TripTransaction({ head, date, amount }: any) {

    return (

        <div className="tripTransaction">
            <div className="tripTransactionIcon"></div>
            <div>
                <h3>{head}</h3>
                <h4 className="tripTransactionDate">{date}</h4>
            </div>

            <h3 className="tripTransactionAmount">${amount}</h3>
            <div className="tripTransactionIcons">
                <div className="bookmark">
                    <TbBookmark />
                </div>
                <div className="delete">
                    <TbTrashX />
                </div>
            </div>
        </div>

    )

}


function TripCu({ expense, totalAmount, items }: any) {
    return (
        <div className="tripcu">
            <div className="tripInfo">
                <h4>Overall, You are owed ${totalAmount / 2}</h4>
                {items.map((item: string, index: number) => (
                    <p key={index}>{item}</p>
                ))}
            </div>

            <div className="tripActions">
                <div className="tripAction actionyellow">
                    <div className="tripButton">
                        <TbArrowBigUpLine />
                    </div>
                    Export trip
                </div>

                <div className="tripAction actionblue" onClick={() => expense(true)}>
                    <div className="tripButton">
                        <TbPlus />
                    </div>
                    Add an expense
                </div>

                <div className="tripAction actionred">
                    <div className="tripButton">
                        <TbCash />
                    </div>
                    See totals
                </div>

                <div className="tripAction actiongreen">
                    <div className="tripButton">
                        <TbUsersPlus />
                    </div>
                    Invite a friend
                </div>
            </div>
        </div>
    );
}
