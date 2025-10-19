"use client"

import { motion } from "framer-motion"
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const expenseData = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Entertainment", value: 200 },
  { name: "Utilities", value: 150 },
]

const savingsData = [
  { month: "Jan", savings: 2400 },
  { month: "Feb", savings: 2210 },
  { month: "Mar", savings: 2290 },
  { month: "Apr", savings: 2000 },
  { month: "May", savings: 2181 },
  { month: "Jun", savings: 2500 },
]

const COLORS = ["#a78bfa", "#c4b5fd", "#ddd6fe", "#ede9fe"]

export default function InsightsSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visualize Your Finances Like Never Before
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beautiful charts and insights that make understanding your money simple and engaging.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Expense Breakdown */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Expense Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: $${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Savings Trend */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Savings Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={savingsData}>
                <Line
                  type="monotone"
                  dataKey="savings"
                  stroke="#a78bfa"
                  strokeWidth={3}
                  dot={{ fill: "#a78bfa", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
